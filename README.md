# 🚀 Lettermint Quickstart Boilerplate (TS + Express)
## 🐳 Docker Deployment
If you prefer to run this as a containerized microservice:

1.  **Build the image:**
    ```bash
    docker build -t lettermint-quickstart .
    ```
2.  **Run the container:**
    ```bash
    docker run -p 3000:3000 --env-file .env lettermint-quickstart
    ```


---

## 🔧 Customization
To adapt this to your specific project needs:
1.  **Modify the Payload:** Edit `src/server.ts` to update the email subject or HTML template.
2.  **Expand the Form:** Add additional fields to `index.html` and update the `req.body` destructuring in the backend logic.

---

## ⚖️ License
This boilerplate is provided for free as a community resource. Feel free to use, modify, and distribute it in your own commercial or personal projects.

*Created by [Gover_Studio](https://gover-studio.com)*Here is the complete **README.md** file for your boilerplate, formatted and ready for your GitHub repository.

---

# 🚀 Lettermint Quickstart Boilerplate (TS + Express)

A "Zero to Hero" integration for transactional emails. This boilerplate allows you to connect a web form to the [Lettermint](https://lettermint.com) API in minutes. 

Built with the guiding principle: **"Build what matters. Automate the rest."**

---

## 🛠 Features
*   **TypeScript Powered:** Type-safe API interactions for more predictable code.
*   **Environment Driven:** Zero hardcoding; simply configure your API key in the `.env` file.
*   **Plug & Play:** Minimal dependencies using Express and Dotenv.
*   **Frontend Ready:** Includes a clean, Tailwind-styled contact form for immediate use.
*   **Docker Support:** Ready to be deployed as a standalone microservice.

---

## 📋 Prerequisites
Before you start, ensure you have:
*   [Node.js](https://nodejs.org/) (v18+) installed.
*   A [Lettermint](https://lettermint.com) account.
*   A verified domain and API token from your Lettermint dashboard.

---

## 🚀 Getting Started

### 1. Installation
Clone this repository or download the source code and install the dependencies:
```bash
npm install

2. Configuration
Create a .env file in the root directory:

LETTERMINT_API_KEY=your_actual_api_token_here
PORT=3000

3. Running the Project
Development Mode (with hot reloading)

npm run dev

Navigate to http://localhost:3000 to test your form

### Production Build

npm run build
npm start

🐳 Docker Deployment
If you prefer to run this as a containerized microservice:

Build the image:

docker build -t lettermint-quickstart .

Run the container:

docker run -p 3000:3000 --env-file .env lettermint-quickstart

🔧 Customization
To adapt this to your specific project needs:

Modify the Payload: Edit src/server.ts to update the email subject or HTML template.

Expand the Form: Add additional fields to index.html and update the req.body destructuring in the backend logic.

⚖️ License
This boilerplate is provided for free as a community resource. Feel free to use, modify, and distribute it in your own commercial or personal projects.
