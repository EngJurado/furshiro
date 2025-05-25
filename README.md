# Hideki

A modern, responsive Astro website featuring a gallery and hero section with self-hosted fonts for better performance and privacy.

## 🚀 Project Structure

```text
/
├── public/
│   └── assets/
│       └── gallery/
├── src/
│   ├── components/
│   │   ├── Gallery.astro
│   │   ├── HeroCard.astro
│   │   └── ScrollPrompt.astro
│   ├── layouts/
│   │   └── MainLayout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

## 🛠️ Technologies Used

- **Astro** v5.6.1 - Static site generator
- **Bootstrap** v5.3.5 - CSS framework (self-hosted)
- **Font Awesome** v6.7.2 - Icons (self-hosted)
- **@fontsource/roboto** v5.2.5 - Roboto font family (self-hosted)
- **@fontsource/noto-sans** v5.2.7 - Noto Sans font (self-hosted)
- **@fontsource/noto-color-emoji** v5.2.7 - Emoji font support (self-hosted)

## ✨ Features

- 🎨 **Self-hosted fonts** - No CDN dependencies for better performance and privacy
- 📱 **Responsive design** - Works on all device sizes
- 🖼️ **Image gallery** - Showcase artwork with artist attribution
- 🌙 **Dark theme** - Modern dark design with custom background patterns
- ⚡ **Fast loading** - Optimized with Astro's static generation
- 🔒 **Privacy-focused** - No external font requests to Google or other CDNs

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local development server at `localhost:4321` |
| `npm run build`           | Builds your production site to `./dist/`         |
| `npm run preview`         | Previews your build locally                      |
| `npm run astro ...`       | Runs Astro CLI commands                          |
| `npm run astro -- --help` | Gets help using the Astro CLI                    |

## 📦 Dependencies

### Core Framework
- `astro`: The main static site generator framework

### UI & Styling
- `bootstrap`: Responsive CSS framework (self-hosted)
- `@fortawesome/fontawesome-free`: Icon library (self-hosted)

### Fonts
- `@fontsource/roboto`: Primary font family with multiple weights
- `@fontsource/noto-sans`: Secondary font for better Unicode support
- `@fontsource/noto-color-emoji`: Color emoji support

## 🎯 Performance Benefits

This project uses self-hosted fonts and libraries instead of CDNs for:
- **Faster loading** - No external network requests
- **Better privacy** - No data sent to third-party services
- **Offline support** - Works without internet connection
- **Consistent performance** - No dependency on external CDN availability
- **GDPR compliance** - No third-party tracking

## 📚 Documentation

For more information about the technologies used:
- [Astro Documentation](https://docs.astro.build)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)
- [Fontsource Documentation](https://fontsource.org/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.