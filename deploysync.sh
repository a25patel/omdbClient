aws s3 sync . s3://aanalpatel-gschool-omdb-client --acl public-read --exclude ".git/*"
open http://aanalpatel-gschool-omdb-client.s3-website-us-west-2.amazonaws.com/
