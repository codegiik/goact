package main

import (
    "log"
    "github.com/gofiber/fiber/v2"
    "github.com/gofiber/template/html"
)

func main() {
    // Initialize standard Go htm template engine
    engine := html.New("./", ".html")

    app := fiber.New(fiber.Config{
        Views: engine,
    })

    app.Static("/", "./dist")

    app.Get("/", func(c *fiber.Ctx) error {
        // Render index template
        return c.Render("document", fiber.Map{
            "Title": "Hello, World!",
            "BundleDir": "/main.js",
        })
    })


    log.Fatal(app.Listen(":3000"))
}
