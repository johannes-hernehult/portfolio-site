FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN --mount=type=secret,id=VITE_EMAILJS_SERVICE_ID \
    --mount=type=secret,id=VITE_EMAILJS_TEMPLATE_ID \
    --mount=type=secret,id=VITE_EMAILJS_PUBLIC_KEY \
    VITE_EMAILJS_SERVICE_ID="$(cat /run/secrets/VITE_EMAILJS_SERVICE_ID)" \
    VITE_EMAILJS_TEMPLATE_ID="$(cat /run/secrets/VITE_EMAILJS_TEMPLATE_ID)" \
    VITE_EMAILJS_PUBLIC_KEY="$(cat /run/secrets/VITE_EMAILJS_PUBLIC_KEY)" \
    npm run build

    FROM nginxinc/nginx-unprivileged:alpine
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    COPY security-headers.conf /etc/nginx/snippets/security-headers.conf
    COPY --from=build /app/dist /usr/share/nginx/html
