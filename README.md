
# Heroku Hapi 503 Bug

*Press this to deploy this "app" to Heroku. It takes 1 min to have the app running*

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

Minimal Hapi code base to reproduce random 503 status code bugs in Heroku.

To test the behavior, run the following command enough times. At some
point Heroku should respond with 503 Application Error even though
the request is the same all the time.

```
curl -d'a' https://heroku-hapi-503-bug.herokuapp.com
```

## Deploy

* Create a Heroku app
* Push this repo to Heroku with `heroku-hapi-503-bug` as app name.
* Run the command above

### Testing commands

```
echo -n -e "POST /pong HTTP/1.0\r\nHost: heroku-hapi-503-bug.herokuapp.com\r\nx-gw-secret: a\r\nContent-Length: 2\r\n\r\n01" | openssl s_client -ign_eof -connect heroku-hapi-503-bug.herokuapp.com:443
```