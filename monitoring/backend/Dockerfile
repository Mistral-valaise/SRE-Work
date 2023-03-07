FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY . ./
# Restore as distinct layers
RUN dotnet restore
# Build and publish a release
RUN dotnet build -c Release -o /app/build

FROM build AS publish
RUN dotnet publish -c Release -o /app/publish

#for more Security we are using here the Image from Redhat for Dotnet to setup the user with the ID 1001 by running the container
FROM registry.access.redhat.com/ubi8/dotnet-60-runtime AS final
WORKDIR /app
COPY --from=publish /app/publish .

ENV ASPNETCORE_URLS=http://*:8080

EXPOSE 8080

#setup the user with the ID 1001 by running the container  using --> FROM registry.access.redhat.com/ubi8/dotnet-60-runtime <---
USER 1001
ENTRYPOINT ["dotnet", "BookStoreApi.dll"]
