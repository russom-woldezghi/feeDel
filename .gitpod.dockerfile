FROM node:16

RUN yarn global add expo-cli

COPY . /workspace

WORKDIR "/workspace/feeDel"
