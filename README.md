# Portfolio Website

Personal portfolio website built with Next.js, TypeScript, and Contentful.

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

## Features

- Next.js framework
- TypeScript
- Contentful CMS integration
- Jest testing
- Accessibility testing with axe
- GitHub Actions workflows for CI

## Project Structure

- `/src/app` - Next.js App Router pages
- `/src/components` - Reusable UI components
- `/src/utils` - Utility functions
- `/src/__tests__` - Test files

## Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm 7.x or higher
- Contentful account for CMS

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio-new
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env.local` file in the root of the project with the following variables:

```
CONTENTFUL_SPACE_ID=your_contentful_space_id
CONTENTFUL_ACCESS_TOKEN=your_contentful_access_token
CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_contentful_preview_access_token
```

4. Run the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site.

## Contentful CMS Setup

1. Create a Contentful account if you don't have one
2. Create a new space
3. Set up the following content models:
   - Portfolio Work
   - About
   - Contact

### Portfolio Work Content Model

Create the following fields:

- Title (Short text)
- Slug (Short text)
- Description (Short text)
- Content (Rich text)
- Featured Image (Media)
- Tags (Short text, List)
- Date (Date & time)
- Is Featured (Boolean)
- Is Password Protected (Boolean)
- Access Password (Short text, hidden field)

## Building and Deployment

### Building for Production

```bash
npm run build
```

This will generate a static site in the `out` directory.

### Deploying to AWS S3

1. Create an S3 bucket in AWS
2. Configure the bucket for static website hosting
3. Upload the contents of the `out` directory to your S3 bucket
4. Set up CloudFront for CDN (optional but recommended)
5. Configure routing to support clean URLs

## Password Protection

The portfolio supports client-side password protection for individual work pages:

1. In Contentful, mark specific work items as password protected
2. Set a password for each protected work item
3. When visitors access a protected page, they'll need to enter the password
4. The password protection happens client-side for static site compatibility

Note: This is a simple client-side protection suitable for light security needs. For more secure protection, consider AWS Cognito or CloudFront functions.

## Customization

### Styling

- Global styles are in `src/styles/globals.css`
- Component-specific styles are in their respective `.module.css` files
- Customize the color scheme by editing CSS variables in `globals.css`

### Adding New Pages

1. Create a new file in the `src/app` directory
2. Export a React component as the default export
3. The file name will determine the route

## License

MIT
