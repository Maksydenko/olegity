using Microsoft.EntityFrameworkCore;
using olegity.Data;
using olegity.Data.Interfaces;
using olegity.Data.Repository;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.Text.Json.Serialization;

namespace olegity
{
    public class Startup
    {
        private IConfigurationRoot _confstring;

        public Startup(IHostEnvironment hostEnv)
        {
            _confstring = new ConfigurationBuilder()
                .SetBasePath(hostEnv.ContentRootPath)
                .AddJsonFile("dbsettings.json")
                .Build();
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<AppDBContent>(options =>
                options.UseSqlServer(_confstring.GetConnectionString("DefaultConnection")));
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddMemoryCache();
            services.AddSession();

            services.AddTransient<IAllSingles, SingleRepository>();
            services.AddTransient<ISinglesPages, PageRepository>();

            services.AddControllers()
                .AddJsonOptions(options =>
                {
                    options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
                    options.JsonSerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;
                    options.JsonSerializerOptions.WriteIndented = true; // Для форматирования JSON
                });

            services.AddCors(options =>
            {
                options.AddPolicy("MyPolicy", builder =>
                {
                    builder.WithOrigins("http://localhost:3000")
                           .AllowAnyMethod()
                           .AllowAnyHeader();
                });
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseCors("MyPolicy");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();

                endpoints.MapControllerRoute(
                    name: "singles",
                    pattern: "Singles/List/{pageID}",
                    defaults: new { controller = "Singles", action = "List" }
                );
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });

            using (var scope = app.ApplicationServices.CreateScope())
            {
                AppDBContent content = scope.ServiceProvider.GetRequiredService<AppDBContent>();
                DBObjects.initial(content);
            }
        }
    }
}
