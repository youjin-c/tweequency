# Tweequency
Automative / generative music using your Tweetdeck account<br/>
<a href="https://vimeo.com/user27717826/review/317746274/18ece97984" target="_blank"><img src="ScreenShot.png" 
alt="IMAGE ALT TEXT HERE" width="300" border="10" /></a><br/>
[Clink the image for the demo video](https://vimeo.com/user27717826/review/317746274/18ece97984)

# What is it? How does it work?
It is a Python automation bot for generative music.<br/>

1. Tweequency opens your TweetDeck with your Twitter account. You can put your Twitter ID and password in the line 37 in the tweetdeck.py file.<br/>
2. TweetDeck has a Trending coloum for your account. Usually it opens a Trending column as default. <br/>
3. Tweequency bot clicks the 7th to the 10th hashtag in the Trending column. You will have 4 new hashtag columns, so 5 columns in total.<br/>
4. Everytime each hashtag column gets updated, it will play a drum sound and you can see which column is updated by thr color change.<br/>
5. Enjoy the tweet orchestra!<br/>

I used [Selenium](https://www.guru99.com/selenium-tutorial.html) and [TweetDeck](https://tweetdeck.twitter.com/) for this project, if you are interested in, go check the link!

# Can I use it?
Sure! you will see ID and password in the line 37 in the tweetdeck.py file.<br/> Instead of <creds['ID']> and <creds['password']>, type your Twitter account and enjoy!
You can also listen to specific hashtags you want.
