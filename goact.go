package main

import (
    "log"
    // "github.com/evanw/esbuild/pkg/api"
    "github.com/gofiber/fiber/v2"
    "github.com/gofiber/template/html"
)

func main() {
    // Initialize standard Go html template engine
    engine := html.New("./", ".html")

    app := fiber.New(fiber.Config{
        Views: engine,
    })

    app.Get("/", func(c *fiber.Ctx) error {
        // Render index template
        return c.Render("document", fiber.Map{
            "Title": "Hello, World!",
        })
    })

    log.Fatal(app.Listen(":3000"))
}
