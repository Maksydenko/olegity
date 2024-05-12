using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;



namespace olegity
{
    public class Program
    {
        public static void Main(string[] args)
        {
            DotNetEnv.Env.Load();

            CreateHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateHostBuilder(string[] args)
        {
            string envFilePath = Path.Combine(Directory.GetCurrentDirectory(), "BACK_PORT.env");
            DotNetEnv.Env.Load(envFilePath);
            return CreateWebHostBuilder(args);
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .ConfigureAppConfiguration((hostingContext, config) =>
                {
                    config.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);
                    config.AddJsonFile($"appsettings.{hostingContext.HostingEnvironment.EnvironmentName}.json", optional: true, reloadOnChange: true);
                    config.AddEnvironmentVariables();
                })
                .UseStartup<Startup>()
                .UseUrls($"http://localhost:{Environment.GetEnvironmentVariable("PORT")}");
    }
}
