---
pageClass: about-page
description: 'The biography and information about me.'
avatar: /profile.jpg
head: 'Denis Evers'
info: 'IT enthusiast'
interests: 'Interests: Creating websites, maintaining servers.'
socials:
- title: github
  link: https://dev.vivumlab.com/github
- title: linkedin
  link: https://dev.vivumlab.com/linkedin
- title: instagram
  link: https://dev.vivumlab.com/instagram
- title: email
  link: 'mailto:denis[at]evers.sh'
actions:
- text: Projects
  link: /projects/
- text: Blog
  link: https://dev.vivumlab.com/github
# - text: CV
#   link: /article/
footer: Made with ♥ by Denis. Powered by VuePress
---

<AboutCard :frontmatter="$page.frontmatter" >

Currently in Australia. More coming soon.

</AboutCard>

<style lang="stylus">

.theme-container.about-page .page
  background-color #e6ecf0
  min-height calc(100vh)
  
  .last-updated
    display none

</style>