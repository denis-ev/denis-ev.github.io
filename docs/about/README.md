---
pageClass: about-page
description: 'The biography and information about me.'
avatar: /profile.jpg
head: 'Denis Evers'
info: 'IT enthusiast'
interests: 'Interests: Creating websites, maintaining servers.'
socials:
- title: github
  link: https://github.com/denis-ev
- title: linkedin
  link: https://www.linkedin.com/in/denis-evers/
- title: instagram
  link: https://www.instagram.com/evers.sh
- title: email
  link: 'mailto:denis[at]evers.sh'
actions:
- text: Projects
  link: /projects/
- text: Blog
  link: https://github.com/denis-ev
# - text: CV
#   link: /article/
footer: Made with ♥ by Denis. Powered by VuePress
---

<AboutCard :frontmatter="$page.frontmatter" >

I have worked in the IT Department of a bank in Germany decided to do some traveling/working in Australia.

</AboutCard>

<style lang="stylus">

.theme-container.about-page .page
  background-color #e6ecf0
  min-height calc(100vh)
  
  .last-updated
    display none

</style>