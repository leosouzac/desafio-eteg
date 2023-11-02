FROM node:20-slim


WORKDIR /home/node/path

COPY ./backend /home/node/path

RUN npm install

USER node

CMD ["tail", "-f", "/dev/null", "npm" ,"run", "dev"]