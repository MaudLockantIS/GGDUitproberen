var builder = DistributedApplication.CreateBuilder(args);

var weatherforecastApi = builder.AddProject<Projects.GGDUitproberen2_Server>("ggduitproberen2-server");

builder
    .AddNpmApp("AngularFrontEnd", "../ggduitproberen2.client")
    .WithReference(weatherforecastApi)
    .WithEnvironment("DEV_SERVER_PORT", "4200");


builder.Build().Run();
