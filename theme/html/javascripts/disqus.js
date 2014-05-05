jQuery(document).ready(function(){
      /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
      window.disqus_shortname = 'oreillymediabiocodertest'; // required: replace example with your forum shortname
      window.disqus_title = $('title').text() + " / " + $('h1').first().text();
      window.disqus_id = $('title').text() + " / " + $('section').first().attr('id');


      /* * * DON'T EDIT BELOW THIS LINE * * */
      (function() {
          var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
          dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
      })();
});