---
pageClass: home-page
# some data for the components

name: Denis Evers
profile: /profile.jpg

socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://kutt.evers.sh/github
  - title: linkedin
    icon: "/icons/linkedin-mono.svg"
    link: https://kutt.evers.sh/linkedin
  - title: instagram
    icon: "/icons/instagram-mono.svg"
    link: https://kutt.evers.sh/instagram

#cv: https://evers.sh
bio: IT enthusiast
email: denis (at) evers (dot) sh
---

<ProfileSection :frontmatter="$page.frontmatter" />

## About Me

Hey, <br/>
I'm Denis from Germany and currently living in Surfers Paradise, QLD, Australia. <br/>
For more information check out [→ About Me](/about/)

## News

- [2020] **Work & Travel Australia** 
- [2014 - 2017] **Ostfriesische Volksbank eG, Leer (Ostfriesland), Germany** Apprenticeship: Management assistant in informatics / IT specialist (Informatikkaufmann))
- [2012 - 2013] **Oakridge High School, Muskegon, Michigan, USA** Certificate of Attendance (Exchange Year)
- [Nov 1994] **Born in Germany**


## Education & Experiences

- **Cosgrove Farming Co** Farm Hand <br/>
April 2021 - current
- **JM & JD Chandler** Farm Hand <br/>
April 2020 - August 2020
- **Ostfriesische Volksbank eG** IT Administrator <br/>
September 2017 - December 2019
- **Ostfriesische Volksbank eG, Leer (Ostfriesland), Germany** Apprenticeship: Management assistant in informatics / IT specialist (Informatikkaufmann) <br/>
2014 - 2017
- **Oakridge, Muskegon, Michigan, USA** Certificate of Attendance (Exchange Year) <br/>
2012 - 2013
- **IGS Aurich-West, Aurich, Germany** <br/>
2009 - 2012



## Projects


[→ Full list](/projects/)

<ProjectCard image="/projects/2.png"
hideBorder=true>

  Denis Evers (Maintainer)
  
  [**Vivumlab**](https://github.com/VivumLab/VivumLab)
  
  Personal Fork from HomelabOS

  [Docs](https://docs.vivumlab.com)
  
</ProjectCard>

## Status services

![DOGGO Backups](https://img.shields.io/endpoint?label=DOGGO%20Backups&style=for-the-badge&url=https%3A%2F%2Fhc.evers.sh%2Fbadge%2F433c549d-5a73-4480-bce5-db2cf79b38c0%2FKZOCJQXv-2%2Fdoggo.shields)

<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  font-size 14px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px

</style>
