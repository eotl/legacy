FROM node:8.11.4

RUN git clone https://github.com/eotl/legacy.git /eotl-legacy

WORKDIR /eotl-legacy

RUN rm yarn.lock
RUN yarn install

EXPOSE 2080

CMD npm run server