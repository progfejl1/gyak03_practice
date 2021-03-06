FROM httpd

RUN apt-get update
RUN apt-get install -y git telnet

RUN git config --global user.name "SomeOne"
RUN git config --global user.email test@someone.hu
RUN git config --global http.sslVerify false
WORKDIR /usr/local/apache2/htdocs

RUN git clone https://github.com/progfejl1/gyak03_practice.git 

EXPOSE 80