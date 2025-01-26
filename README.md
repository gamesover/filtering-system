# Impact Card Filtering System

A modern web application built with Ruby on Rails and React that allows users to filter and interact with impact cards. The system provides an intuitive interface for managing and filtering impact cards based on various criteria such as brand, location, sponsor, and rewards.

## Technology Stack

### Backend
- Ruby on Rails 8.0
- PostgreSQL
- Puma web server
- Rack CORS for handling Cross-Origin Resource Sharing
- Solid Cache, Queue, and Cable for database-backed adapters
- Kamal for Docker container deployment

### Frontend
- React 18
- Vite for build tooling and development server
- TailwindCSS for styling
- React Router for navigation
- Axios for API communication

## Features

- Interactive filtering system for impact cards
- Real-time updates
- Responsive design
- RESTful API endpoints
- Cross-Origin Resource Sharing (CORS) support

## Getting Started

### Prerequisites

- Ruby 3.x
- Node.js and Yarn
- PostgreSQL

### Backend Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   bundle install
   ```
3. Setup the database:
   ```bash
   rails db:create db:migrate db:seed
   ```
4. Start the Rails server:
   ```bash
   bin/rails server
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Start the development server:
   ```bash
   yarn dev
   ```

The application should now be running at `http://localhost:5173` with the API available at `http://localhost:3000`.

## Development

### Running Tests

Backend tests:
```bash
bin/rails test
```

Frontend tests:
```bash
cd frontend
yarn test
```

### Code Style

The project follows Rails and React best practices:

- Backend uses Rubocop with Rails Omakase configuration
- Frontend uses ESLint with React plugin

To check code style:

Backend:
```bash
bin/rubocop
```

Frontend:
```bash
cd frontend
yarn lint
```

## Deployment

The application is containerized and can be deployed using Kamal:

```bash
bin/kamal deploy
```

## API Documentation

The backend provides RESTful API endpoints for managing impact cards:

### Impact Cards

- `GET /api/v1/impact_cards` - List all impact cards
- `GET /api/v1/impact_cards/:id` - Get a specific impact card
- `POST /api/v1/impact_cards` - Create a new impact card
- `PUT /api/v1/impact_cards/:id` - Update an impact card
- `DELETE /api/v1/impact_cards/:id` - Delete an impact card

Query parameters for filtering:
- `brand` - Filter by brand name
- `location` - Filter by location
- `sponsor` - Filter by sponsor
- `reward` - Filter by reward type

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
