using Microsoft.EntityFrameworkCore;
using olegity.Data;
using System.Text.Json.Serialization;

namespace olegity
{
    public class Startup
    {
        private readonly IConfigurationRoot _confstring;

        public Startup(IHostEnvironment hostEnv)
        {
            _confstring = new ConfigurationBuilder()
                .SetBasePath(hostEnv.ContentRootPath)
                .AddJsonFile("dbsettings.json")
                .Build();
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<SinglesDBContent>(options =>
                options.UseSqlServer(_confstring.GetConnectionString("SingleConnection")));

            services.AddDbContext<AlbumsDBContent>(options =>
                options.UseSqlServer(_confstring.GetConnectionString("AlbumsDatabaseConnection")));

            services.AddDbContext<EpDBContent>(options =>
                options.UseSqlServer(_confstring.GetConnectionString("EpDatabaseConnection")));

            services.AddDbContext<AboutDBContent>(options =>
                options.UseSqlServer(_confstring.GetConnectionString("AboutDatabaseConnection")));

            services.AddDbContext<ConcertsDBContent>(options =>
                options.UseSqlServer(_confstring.GetConnectionString("ConcertsDatabaseConnection")));

            services.AddDbContext<ClipsDBContent>(options =>
                options.UseSqlServer(_confstring.GetConnectionString("ClipsDatabaseConnection")));
            
            services.AddDbContext<AnimatedDBContent>(options =>
                options.UseSqlServer(_confstring.GetConnectionString("AnimatedDatabaseConnection")));


            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddMemoryCache();
            services.AddSession();
            services.AddRazorPages();

            services.AddControllers()
                .AddJsonOptions(options =>
                {
                    options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
                    options.JsonSerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;
                    options.JsonSerializerOptions.WriteIndented = true;
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

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapRazorPages();
            });

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseCors("MyPolicy");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            InitializeDatabases(app);
        }

        private static void InitializeDatabases(IApplicationBuilder app)
        {
            using var scope = app.ApplicationServices.CreateScope();
            var services = scope.ServiceProvider;

            var singlesContent = services.GetRequiredService<SinglesDBContent>();
            var albumsContent = services.GetRequiredService<AlbumsDBContent>();
            var epContent = services.GetRequiredService<EpDBContent>();
        }
    }
}
