(ns app.screen.menu.core
  (:require
   [app.components.button.core :refer [button]]))

(defn menu []
  [:nav.navbar.fixed-top.navbar-expand-lg.navbar-light
        [:div.container
          [:a.navbar-brand.logo {:href "#"} [:span "App"]"Lab"]
          [:button.navbar-toggler {:type "button" :data-toggle "collapse" :data-target "#navbarSupportedContent"
            :aria-controls "navbarSupportedContent" :aria-expanded "false" :aria-label "Toggle navigation"}
            [:i.fas.fa-bars
            ]
          ]
          [:div#navbarSupportedContent.collapse.navbar-collapse
            [:ul.navbar-nav.mr-auto.w-100.justify-content-end.align-items-center
              [:li.nav-item
                [:a.nav-link {:href "#home"}"Home"]
              ]
              [:li.nav-item
                [:a.nav-link {:href "#features"}"Key Features"]
              ]
              [:li.nav-item
                [:a.nav-link {:href "#prices"}"Pricing"]
              ]
              [:li.nav-item
                [:a.nav-link {:href "#testimonials"}"Testiminial"]
              ]
              [:li.nav-item
                [:a.nav-link {:href "#faqs"}"FAQ"]
              ]
              [:li.nav-item
                [button "Try for free"]
              ]
            ]
          ]
        ]
      ])