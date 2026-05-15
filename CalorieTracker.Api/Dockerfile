# Build aşaması
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Sadece proje dosyasını kopyalayıp bağımlılıkları indiriyoruz (Docker cache optimizasyonu için)
COPY ["CalorieTracker.Api.csproj", "./"]
RUN dotnet restore "CalorieTracker.Api.csproj"

# Kalan tüm dosyaları kopyalayıp Release modunda projeyi derliyoruz
COPY . .
RUN dotnet publish "CalorieTracker.Api.csproj" -c Release -o /app/publish

# Runtime (Çalışma) aşaması
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final
WORKDIR /app

# Render genellikle uygulamaların 8080 portunda çalışmasını bekler. 
# .NET 8 ve sonrası container'lar varsayılan olarak 8080 kullanır.
EXPOSE 8080
ENV ASPNETCORE_HTTP_PORTS=8080

COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "CalorieTracker.Api.dll"]
