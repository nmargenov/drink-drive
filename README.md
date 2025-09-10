# Drink Drive website
Drink Drive a website I did for my friend's small business.  The site boasts a simple design, featuring a single form for ordering a car online and buttons for directly calling the service.

## Live production
You can see the production [here](https://drink-drive-eight.vercel.app/).

## Installation
To get started, ensure you have Node.js installed on your system. Then navigate to the project directory in your terminal and run:

```
npm install
npm run dev
```

## EmailJS
You need a registration in [EmailJS](https://www.emailjs.com/). Follow the steps and create a template. The form works with this service and needs environment variables. This service is used to minimize backend server hosting costs for email needs, tailored to the client's requirements.

## EmailJS Template Setup

To make the order form work with EmailJS, you need to create an EmailJS template and use the following variables. These values are automatically sent from the form.

### Template Variables

| Variable        | Description           | Example                 |
|-----------------|---------------------|------------------------|
| `{{name}}`      | Ordered name         | Иван Иванов            |
| `{{tel}}`       | Phone number         | +359888123456          |
| `{{location}}`  | Location             | София, ул. Витоша 10   |
| `{{description}}` | Additional details  | Синя кола пред блока   |

## Environment variables
```
VITE_APP_SERVICE_ID = Service ID provided by EmailJS
VITE_APP_TEMPLATE_ID = Template ID provided by EmailJS
VITE_APP_PUBLIC_KEY = Public Key provided by EmailJS
VITE_APP_PHONE = Raw number, used for links, example: +359880000000
VITE_APP_PHONE_FORMAT = Use this for how the number will be displayed on the site, example: 0880 000 000
 ```
