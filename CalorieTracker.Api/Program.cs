using CalorieTracker.Api.Data;
using CalorieTracker.Api.Services;
using Microsoft.EntityFrameworkCore;
using Google.GenAI;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
var geminiApiKey = builder.Configuration.GetConnectionString("GeminiConnection");



builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

builder.Services.AddControllers();

builder.Services.AddSingleton(new Client(apiKey: geminiApiKey));

builder.Services.AddScoped<GeminiService>();

var app = builder.Build();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}


//app.UseHttpsRedirection();
app.MapControllers();


app.Run();

