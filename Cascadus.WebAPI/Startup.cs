using Cascadus.BAL.Implementation;
using Cascadus.BAL.Interface;
using Cascadus.DAL.Implementation;
using Cascadus.DAL.Interface;
using Cascadus.Model.Models.ViewModels;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace Cascadus.WebAPI
{
    public class Startup
    {
        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(MyAllowSpecificOrigins,
                builder =>
                {
                    builder.WithOrigins(
                        "https://localhost:44326",
                        "http://localhost:44326",
                        "http://localhost:4200",
                        "https://localhost:4200",
                        "http://cascadus.hr",
                        "https://cascadus.hr")
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowCredentials()
                    .WithExposedHeaders("X-XSRF-TOKEN");
                });
            });

            var jwtSigningKey = Configuration
                    .GetSection("JWTSigningKey")
                    .Get<JwtSigningKey>();
            services.AddSingleton(jwtSigningKey);

            services.AddAuthentication(opt =>
            {
                opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = false,
                        ValidateAudience = false,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,

                        ValidIssuer = "https://api.cascadus.hr",
                        ValidAudience = "https://cascadus.hr",
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSigningKey.Key))
                    };
                });

            var emailConfiguration = Configuration
                .GetSection("MailSettings")
                .Get<EmailConfiguration>();
            services.AddSingleton(emailConfiguration);

            services.AddHttpClient<PaymentService>();


            services.Configure<FormOptions>(o =>
            {
                o.ValueLengthLimit = int.MaxValue;
                o.MultipartBodyLengthLimit = int.MaxValue;
                o.MemoryBufferThreshold = int.MaxValue;
            });

            services.AddSingleton<IKupacService, KupacService>();
            services.AddSingleton<IKupacRepo, KupacRepository>();

            services.AddTransient<IProizvodService, ProizvodService>();
            services.AddSingleton<IProizvodRepo, ProizvodRepository>();

            services.AddTransient<IKategorijeProizvodaService, KategorijaProizvodaService>();
            services.AddSingleton<IKategorijaProizvodaRepo, KategorijaProizvodaRepository>();

            services.AddTransient<IStavkaService, StavkaService>();
            services.AddSingleton<IStavkaRepo, StavkaRepository>();

            services.AddTransient<IRacunService, RacunService>();
            services.AddSingleton<IRacunRepo, RacunRepository>();

            services.AddTransient<IKorisnickiRacunService, KorisnickiRacunService>();
            services.AddSingleton<IKorisnickiRacunRepo, KorisnickiRacunRepository>();

            services.AddTransient<IPopustKodService, PopustKodService>();
            services.AddSingleton<IPopustKodRepo, PopustKodRepository>();

            services.AddSingleton<IPaymentService, PaymentService>();

            services.AddScoped<IMailService, MailService>();
            services.AddTransient<EmailRepository>();

            services.AddControllers();

            services.AddAntiforgery(options =>
            {
                // Angular's default header name for sending the XSRF token.
                services.AddAntiforgery(options =>
                {
                    options.HeaderName = "X-XSRF-TOKEN";
                });
            });

        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, IAntiforgery antiforgery)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(MyAllowSpecificOrigins);

            app.UseHttpsRedirection();
            app.UseRouting();

            app.UseForwardedHeaders(new ForwardedHeadersOptions
            {
                ForwardedHeaders = ForwardedHeaders.XForwardedFor |
               ForwardedHeaders.XForwardedProto
            });

            app.UseAuthentication();


            app.UseAuthorization();

            app.Use(next => context =>
            {
                string path = context.Request.Path.Value.ToLower();
                string[] directUrls = { "/admin", "/cart", "/auth" };
                bool directUrlContained = false;
                foreach (var s in directUrls)
                {
                    if (path.StartsWith(s))
                    {
                        directUrlContained = true;
                    }
                }

                if (path.StartsWith("/api") || string.Equals("/", path) || directUrlContained)
                {
                    var token = antiforgery.GetAndStoreTokens(context).RequestToken;
                    context.Response.Cookies.Append("X-XSRF-TOKEN", token,
                        new CookieOptions()
                        {
                            HttpOnly = false,
                            Secure = false,
                            IsEssential = true,
                            SameSite = SameSiteMode.Strict
                        });
                }

                return next(context);
            });


            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

        }

    }
}
