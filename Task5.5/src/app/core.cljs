(ns app.core
  (:require
   [reagent.dom :as rdom]
   [reagent.core :as r]))

;;COMPONENTS
      ;;Button
   (defn Button [text]
     [:a.btn.main-btn :href "#"  text])
    
      ;;Text
(defn H2andPLeft [h2 p]
  [:div
[:h2.section-heading h2]
[:p.lead p]
  ])


;;SITE
(defn home []
  [:section#home
                [:div.container
                    [:div.row
                        [:div.col-lg-6.col-md-7.col-xs-12
                            [:div.home-content
                                [:div.best-app
                                    [:div.circle
                                        [:img.img-fluid {:src "assets/correct.png" :alt "correct"}]
                                    ]
                                    [:h3 "#1 Editiors Choice App of 2020"]
                                ]
                                [:h1 "Best app for your modern lifestyle"]
                                [:p "Increase productivity with a simple to-do app. app for
                            managing your personal budgets."]
                                [:div.home-btn
                                    (Button "Try for free")
                                    [:a.btn.unstyled-btn :href "#" "Watch demo video"]
                                ]
                            ]
                        ]
                        [:div.col-lg-6.col-md-5.col-xs-12
                            [:div.home-img
                                [:img.img-fluid {:src "assets/phone_0.png" :alt "phone_0"}]
                            ]
                        ]
                   ]
                ]
            ])

(defn clients []
  [:section#clients.section-space
   [:div.container
    [:h2.text-center "Trusted by companies like"]
    [:div.row.justify-content-center.align-items-center
     [:div.col-lg-2.col-md-4.col-sm-6.client-item
      [:img.img-fluid {:src "assets/clients/1.png" :alt "client1"}]]
     [:div.col-lg-2.col-md-4.col-sm-6.client-item
      [:img.img-fluid {:src "assets/clients/2.png" :alt "client2"}]]
     [:div.col-lg-2.col-md-4.col-sm-6.client-item
      [:img.img-fluid {:src "assets/clients/3.png" :alt "client3"}]]
     [:div.col-lg-2.col-md-4.col-sm-6.client-item
      [:img.img-fluid {:src "assets/clients/4.png" :alt "client4"}]]
     [:div.col-lg-2.col-md-4.col-sm-6.client-item
      [:img.img-fluid {:src "assets/clients/5.png" :alt "client5"}]]]]])

(defn features []
  [:section#features.section-space
        [:div.container
          [:div.row.justify-content-center
            [:div.col-md-6.col-xs-12
              [:div.feature-img
                [:img.img-fluid {:src "assets/features-phone.png" :alt "features-phone"}]
              ]
            ]
            [:div.col-md-6.col-xs-12
              (H2andPLeft "Awesome apps features" 
              "Increase productivity with a simple to-do app. app for
                        managing your personal budgets.")
              [:div.feature-list
                [:div.feature-item
                  [:div.elipse.red
                    [:img.img-fluid {:src "assets/icon-1.png" :alt "icon-1"}]
                  ]
                  [:div.elipse-info
                    [:h3.red "Fast Performance"]
                    [:p "Get your blood tests delivered at
                    home collect a sample from the
                                    news your blood tests."]
                  ]
                ]
                [:div.feature-item
                  [:div.elipse.blue
                    [:img.img-fluid {:src "assets/icon-2.png" :alt "icon-2"}]
                  ]
                  [:div.elipse-info
                    [:h3.blue "Prototyping"]
                    [:p "Get your blood tests delivered at
                    home collect a sample from the
                                    news your blood tests."]
                  ]
                ]
                [:div.feature-item
                  [:div.elipse.green
                    [:img.img-fluid {:src "assets/icon-1.png" :alt "icon-3"}]
                  ]
                  [:div.elipse-info
                    [:h3.green "Vector Editing" ]
                    [:p "Get your blood tests delivered at
                    home collect a sample from the
                                    news your blood tests."]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
)

(defn jackpot []
  [:section#jackpot.section-space
                [:div.container
                    [:div.row.justify-content-center.align-items-center
                        [:div.col-md-6.horizontal
                            [:h1.display-4
                                "Smart jackpots that
                                you may love this
                        anytime & anywhere"]
                        ]
                        [:div.col-md-6.d-flex.justify-content-center
                            [:p.lead "The rise of mobile devices transforms the way we
                            consume information entirely and the world's most
                        elevant channels such as Facebook."]
                        ]
                    ]
                    [:div.row.justify-content-center.py-5
                        [:div.feature-list.d-flex
                            (LeftImageTopAndText imgColor="elipse red" images={icon4} textColor="red"
                                h3="Automatic Payouts" p="Get your blood tests delivered at  
                                home collect a sample from the news your blood tests.")
                            (LeftImageTopAndText imgColor="elipse blue" images={icon5} textColor="blue"
                                h3="Network Effect" p="Get your blood tests delivered at  
                                home collect a sample from the news your blood tests.")
                            (LeftImageTopAndText imgColor="elipse green" images={icon6} textColor="green"
                                h3="Bigger Rewards Method" p="Get your blood tests delivered at  
                                home collect a sample from the news your blood tests.")
                        ]
                    ]
                ]
            ]
  )

(defn integration [] 
  [:section.section-space-sm
                [:div.container
                    [:div.row.align-items-center
                        [:div.col-md-6.col-xs-12
                            [:div.integration-img
                                [:img.img-fluid {:src "assets/integration.png" :alt "integration"}]
                            ]
                        ]
                        [:div.col-md-6.col-xs-12
                            (H2andPLeft "Designed & built by the latest code 
                            integration" "The rise of mobile devices transforms the way we 
                        consume information entirely and the world's most 
                        elevant channels such as Facebook.")
                            (Button "Learn more")
                        ]
                    ]
                ]
            ])
  
(defn facts []
  [:section#facts.section-space
                [:div.container
                    (H2andPCenter "Why you should choose 
                    our app" "The rise of mobile
                devices transforms the way we consume information entirely
                and the world's most elevant channels such as Facebook.")
                    [:div.row.pt-5.justify-content-center
                        (CenterImageTopAndText color="elipse red" images={webDesign} h3="App Development"
                            p="Get your blood tests delivered at  
                            home collect a sample from the news your blood tests.")
                        (CenterImageTopAndText color="elipse lblue" images={trophy} h3="10 Times Award"
                            p="Get your blood tests delivered at
                            home collect a sample from the news your blood tests.")
                        (CenterImageTopAndText color="elipse yellow" images={computer} h3="Cloud Storage"
                            p="Get your blood tests delivered at  
                            home collect a sample from the news your blood tests.")
                        (CenterImageTopAndText color="elipse green" images={customerSupport} h3="UX Planning"
                            p="Get your blood tests delivered at  
                            home collect a sample from the news your blood tests.")
                        (CenterImageTopAndText color="elipse blue" images={ui} h3="10 Times Award"
                            p="Get your blood tests delivered at
                            home collect a sample from the news your blood tests.")
                        (CenterImageTopAndText color="elipse lred" images={customerService} h3="Customer Support"
                            p="Get your blood tests delivered at  
                            home collect a sample from the news your blood tests.")
                    ]
                ]
            ]
  )

(defn ultimate []
   [:div.container
                [:div.row.align-items-center
                    [:div.col-7
                        (H2andPLeft "Ultimate features that we built" 
            "The rise of mobile devices transforms the way we
                        consume information entirely")
                        [:div.row.ultimate-features
                            <LeftImageTopAndTextUl imgColor="elipse red" images={webDesign}
                                h3="App Development" p="Get your blood tests delivered at
                                home collect a sample from the news your blood tests."]
                            <LeftImageTopAndTextUl imgColor="elipse green" images={ui}
                                h3="UX Planning" p="Get your blood tests delivered at
                                home collect a sample from the news your blood tests."]
                            <LeftImageTopAndTextUl imgColor="elipse yellow" images={computer}
                                h3="Cloud Storage" p="Get your blood tests delivered at
                                home collect a sample from the news your blood tests."]
                            <LeftImageTopAndTextUl imgColor="elipse red" images={customerService}
                                h3="Customer Support" p="Get your blood tests delivered at
                                home collect a sample from the news your blood tests."]
                        ]
                        (Button "See all")
                    ]
                    [:div.col-5
                        [:div.feature-img
                            [:img.img-fluid {:src "features2" :alt "features-2"}]
                        ]
                    ]
                ]
            ])

(defn prices []
  [:section#prices.section-space
                [:div.container
                    (H2andPCenter "Get awesome features, without
                    extra charge" "The rise of mobile devices transforms the way we consume
                    information entirely
                and the world's most elevant channels such as Facebook.")
                    [:div.pricing-container.justify-content-center
                        [:div.pricing-switcher
                            [:p.fieldset
                                <input type="radio" name="duration-1" value="monthly" id="monthly-1" checked=..... ]
                                <label for="monthly-1">Monthly</label>
                                <input type="radio" name="duration-1" value="annuqlay" id="annuqlay-1" ]
                                <label for="annuqlay-1">Annualay</label>
                                <span class="switch"></span>
                            ]
                        ]
                        [:div.table.row.justify-content-center
                            [:div.col-lg-4.col-md-6
                                [:div.table-item.is-visible :data-type monthly
                                    [:div.table-head
                                       [:h2 [:strong.price-1 $0]/month]
                                        [:h4 "Business Class"]
                                        [:p.lead "For Small teams or office"]
                                    ]
                                   [:ul.table-content
                                        [:li "Drag & Drop Builder"]
                                        [:li "1,000's of Templates"]
                                        [:li "Blog Support Tools"]
                                        [:li "eCommerce Store"]
                                    ]
                                    (Button "Start free trial")
                                ]
                            ]
                            [:div.col-lg-4.col-md-6
                                [:div.table-item.is-visible :data-type yearly
                                    [:div.table-head
                                        [:h2 [:strong.price-2 $99]/month]
                                        [:h4 "Pro Master"]
                                        [:p.lead "For Best Oportunities"]
                                    ]
                                   [:ul.table-content
                                        [:li "Drag & Drop Builder"]
                                        [:li "1,000's of Templates"]
                                        [:li "Blog Support Tools"]
                                        [:li "eCommerce Store"]
                                    ]
                                    [:div.table-btn
                                        (Button "Subscribe Now")
                                        [:a.btn.unstyled-btn :href "#" "Or start 14 Free Trial"]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ])

(defn testimonials []
  [:section#testimonials.section-space
                [:div.container
                    [:div.row.justify-content-center
                        [:div.col-md-6.col-xs-12
                            [:div.feature-img
                                [:img.img-fluid {:src "assets/testimonials.png"}]
                            ]
                        ]
                        [:div.col-md-6.col-xs-12
                            [:div#carouselExampleFade.carousel {:slide carousel-fade :data-bs-ride carousel}
                                [:div.carousel-inner
                                    [:div.carousel-item
                                        [:div.col-lg-12
                                            [:div.customer-wrapper
                                                (H2andPLeft "Meet Client Satisfaction
                                                by using product" "The rise of mobile devices transforms the way we consume.
                                            elevant channels such as Facebook.")
                                                [:div.star-rating
                                                    [:img {:src "assets/stars.png" :alt "stars"}]
                                                ]
                                                [:h4 "User friendly & Customizable"]
                                                [:p "Bring to the table win-win survival strategies to ensure proactive
                                                domination.
                                                At the end of the day, going forward, a new normal that has  evolved
                                                from
                                                generation X is on the runway heading towards a streamlined cloud
                                                solution. User
                                                generated content in real-time will have multiple touchpoints for
                                                offshoring."
                                        ]
                                                [:div.user
                                                    [:div.user-pic
                                                        [:img.img-fluid {:src "assets/user-1.png" :alt "user"}]
                                                    ]
                                                    [:div.user-name
                                                        [:h5 "Zoltan Nemeth"]
                                                        [:p "CEO of Pixler Lab"]
                                                    ]
                                                ]
                                            ]
                                            [:div.owl-nav <button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button>]
                                        ]
                                    ]
                                    [:div.carousel-item
                                        [:div.col-lg-12
                                            [:div.customer-wrapper
                                                [:div.section-heading
                                                   [:h2 "Meet Client
                                                by using product"]
                                                ]
                                                [:p.lead "The rise of mobile devices transforms the way we consume.
                                            elevant channels such as Facebook."]
                                                [:div.star-rating
                                                    [:img {:src "assets/stars.png" :alt "stars"}]
                                                ]
                                                [:h4 "User friendly & Customizable"]
                                                [:p "Bring to the table win-win survival strategies to ensure proactive
                                                domination.
                                                At the end of the day, going forward, a new normal that has  evolved
                                                from
                                                generation X is on the runway heading towards a streamlined cloud
                                                solution. User
                                                generated content in real-time will have multiple touchpoints for
                                                offshoring."
                                        ]
                                                [:div.user
                                                    [:div.user-pic
                                                        [:img.img-fluid {:src "assets/user-1.png" :alt "user"}]
                                                    ]
                                                    [:div.user-name
                                                        [:h5 "Zoltan Nemeth"]
                                                        [:p "CEO of Pixler Lab"]
                                                    ]
                                                ]
                                            ]
                                            [:div.owl-nav <button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button>]
                                        ]
                                    ]
                                    [:div.carousel-item.active
                                        [:div.col-lg-12
                                            [:div.customer-wrapper
                                                [:div.section-heading
                                                   [:h2 "Meet by using product"]
                                                ]
                                                [:p.lead "The rise of mobile devices transforms the way we consume.
                                            elevant channels such as Facebook."]
                                                [:div.star-rating
                                                    [:img {:src "assets/stars.png" :alt "stars"}]
                                                ]
                                                [:h4 "User friendly & Customizable"]
                                                [:p "Bring to the table win-win survival strategies to ensure proactive
                                                domination.
                                                At the end of the day, going forward, a new normal that has  evolved
                                                from
                                                generation X is on the runway heading towards a streamlined cloud
                                                solution. User
                                                generated content in real-time will have multiple touchpoints for
                                                offshoring."]
                                                [:div.user
                                                    [:div.user-pic
                                                        [:img.img-fluid {:src "assets/user-1.png" :alt "user"}]
                                                    ]
                                                    [:div.user-name
                                                        [:h5 "Zoltan Nemeth"]
                                                        [:p "CEO of Pixler Lab"]
                                                    ]
                                                ]
                                            ]
                                            [:div.owl-nav <button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button>
                                                <button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button>]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ])

(defn faqs []
  [:section#faqs.section-space
                [:div.container
                    (H2andPCenter "Frequently asked questions" p="The rise of mobile devices transforms the way we consume information
                    entirely and the world's most elevant channels such as Facebook."]
                    [:div.row.justify-content-center
                        [:div.col-md-8.col-xs-12
                            [:div#accordionExample.accordion
                                [:div.accordion-item
                                    [:h2#panelsStayOpen-headingOne.accordion-header
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                            [:h4 "How to contact with riders emergency?"]
                                        </button>
                                    ]
                                    [:div#panelsStayOpen-collapseOne.accordion-collapse.collapse.show :aria-labelledby panelsStayOpen-headingOne
                                        [:div.accordion-body
                                            [:p.lain "Leverage agile frameworks to provide a robust synopsis for high level overviews.
                                                Iterative approaches to corporate strategy foster collaborative thinking to
                                                further
                                                the
                                                overall value proposition. Organically grow the holistic world view of
                                                disruptive
                                                innovation via workplace diversity and empowerment."
                                        ]
                                        ]
                                    ]
                                ]
                                [:div.accordion-item
                                    [:h2#panelsStayOpen-headingTwo.accordion-header
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                            [:h4 "App installation failed, how to update system information?"]
                                        </button>
                                    ]
                                    [:div#panelsStayOpen-collapseTwo.accordion-collapse.collapse :aria-labelledby panelsStayOpen-headingTwo
                                        [:div.accordion-body
                                            [:p.lain [:strong "This is the second item's accordion body. "] "It is
                                            hidden by default,
                                            until the collapse plugin adds the appropriate classes that we use to style each
                                            element. These classes control the overall appearance, as well as the showing
                                            and
                                            hiding
                                            via CSS transitions. You can modify any of this with custom CSS or overriding
                                            our
                                            default variables. It's also worth noting that just about any HTML can go within
                                            the
                                            <code>.accordion-body</code>, though the transition does limit overflow."
                                        ]
                                        ]
                                    ]
                                ]
                                [:div.accordion-item
                                    [:h2#panelsStayOpen-headingThree.accordion-header
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                            [:h4 "Website reponse taking time, how to improve?"]
                                        </button>
                                    ]
                                    [:div#panelsStayOpen-collapseThree.accordion-collapse collapse :aria-labelledby panelsStayOpen-headingThree
                                        [:div.accordion-body
                                            [:p.lain [:strong "This is the third item's accordion body. "] "It is
                                            hidden by default,
                                            until
                                            the collapse plugin adds the appropriate classes that we use to style each
                                            element.
                                            These classes control the overall appearance, as well as the showing and hiding
                                            via
                                            CSS
                                            transitions. You can modify any of this with custom CSS or overriding our
                                            default
                                            variables. It's also worth noting that just about any HTML can go within the
                                            <code>.accordion-body</code>, though the transition does limit overflow."
                                        ]
                                        ]
                                    ]
                                ]
                                [:div.accordion-item
                                    [:h2#panelsStayOpen-headingFour.accordion-header
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                            [:h4 "New update fixed all bug and issues"]
                                        </button>
                                    ]
                                    [:div#panelsStayOpen-collapseFour.accordion-collapse collapse :aria-labelledby panelsStayOpen-headingFour
                                        [:div.accordion-body
                                            [:p.lain [:strong "This is the third item's accordion body. "] "It is
                                            hidden by default,
                                            until
                                            the collapse plugin adds the appropriate classes that we use to style each
                                            element.
                                            These classes control the overall appearance, as well as the showing and hiding
                                            via
                                            CSS
                                            transitions. You can modify any of this with custom CSS or overriding our
                                            default
                                            variables. It's also worth noting that just about any HTML can go within the
                                            <code>.accordion-body</code>, though the transition does limit overflow."
                                        ]
                                        ]
                                    ]
                                ]
                                [:div.accordion-item
                                    [:h2#panelsStayOpen-headingFive.accordion-header
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                                            [:h4 "How to contact with riders emergency?"]
                                        </button>
                                    ]
                                    [:div#panelsStayOpen-collapseFive.accordion-collapse.collapse :aria-labelledby panelsStayOpen-headingFive
                                        [:div.accordion-body
                                            [:p.lain [:strong "This is the third item's accordion body."] "It is
                                            hidden by default,
                                            until
                                            the collapse plugin adds the appropriate classes that we use to style each
                                            element.
                                            These classes control the overall appearance, as well as the showing and hiding
                                            via
                                            CSS
                                            transitions. You can modify any of this with custom CSS or overriding our
                                            default
                                            variables. It's also worth noting that just about any HTML can go within the
                                            <code>.accordion-body</code>, though the transition does limit overflow."
                                        ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
            )

(defn download []
   [:section#download.section-space
                [:div.container
                    [:div.row
                        [:div.col-lg-6.col-md-6.col-xs-12
                            [:div.download-content
                                [:h1 "Download Our App Now!"]
                                [:p "The rise of mobile devices transforms the way we consume information entirely
                            and the world's most elevant channels such as Facebook."]
                                [:div.download-btns
                                   [:a {:href "https://play.google.com/store/apps/" :target "_blank"}
                                        [:img.img-fluid {:src "assets/play.png" :alt "GoogleStore"}]
                                   ]
                                    [:a {:href "https://itunes.apple.com/us/app/" :target "_blank"}
                                        [:img.img-fluid {:src "assets/ios.png" :alt "AppStore"}]
                                    ]
                                ]
                            ]
                        ]
                        [:div.col-lg-6col-md-6
                            [:img.img-fluid {:src "assets/download.png" :alt "download"}]
                        ]
                    ]
                ]
            ])

(defn footer []
 [:footer.section-space-sm
               [:div.container
                    [:div.row.justify-content-center.text-center
                       [:div.col-md-12
                            [:div.logo [:span "App"] "Lab"]
                           [:ul.nav-list.list-unstyled.d-flex.justify-content-center
                                [:li.nav-item
                                    [:a.nav-link :href "#home" "Home"]]
                                [:li.nav-item
                                    [:a.nav-link :href "#features" "Key Features"]]
                                [:li.nav-item
                                    [:a.nav-link :href "#pricing" "Pricing"] ]
                                [:li.nav-item
                                    [:a.nav-link :href "#testimonials" "Testimonials"] ]
                                [:li.nav-item
                                    [:a.nav-link :href "#faqs"  "FAQs"]]
                            ]
                            [:div.social-icon
                                [:i.fab.fa-facebook-f
                                    [:img.imgFoot {:src "assets/fb.png" :alt "fb"}]]
                               [:i.fab.fa-twitter
                                    [:img.imgFoot {:src "assets/tw.png" :alt "tw"}] ]
                               [:i.fab.fa-slack-hash
                                    [:img.imgFoot {:src "assets/sl.png" :alt "sl"}] ]
                               [:i.fab.fa-github-square
                                    [:img.imgFoot {:src "assets/gt.png" :alt "gt"}]]
                            ]
                            [:div.copyright "Copyright© Arifur Rahman Tushar 2019. All rights reserved"]
                        ]
                    ]
                ]
            ]
 )

(defn ^:dev/after-load render
  "Render the toplevel component for this app."
  []
  (rdom/render [download]
               (.getElementById js/document "app")))

(defn main []
  (js/console.log "MAIN FN Reloaded")
  (render))