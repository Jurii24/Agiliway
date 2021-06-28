(ns app.screen.footer.core)

(defn footer []
  [:footer.section-space-sm
   [:div.container
    [:div.row.justify-content-center.text-center
     [:div.col-md-12
      [:div.logo [:span "App"] "Lab"]
      [:ul.nav-list.list-unstyled.d-flex.justify-content-center
       [:li.nav-item
        [:a.nav-link {:href "#home"} "Home"]]
       [:li.nav-item
        [:a.nav-link {:href "#features"} "Key Features"]]
       [:li.nav-item
        [:a.nav-link {:href "#pricing"} "Pricing"]]
       [:li.nav-item
        [:a.nav-link {:href "#testimonials"} "Testimonials"]]
       [:li.nav-item
        [:a.nav-link {:href "#faqs"}  "FAQs"]]]
      [:div.social-icon
       [:i.fab.fa-facebook-f
        [:img.imgFoot {:src "assets/fb.png" :alt "fb"}]]
       [:i.fab.fa-twitter
        [:img.imgFoot {:src "assets/tw.png" :alt "tw"}]]
       [:i.fab.fa-slack-hash
        [:img.imgFoot {:src "assets/sl.png" :alt "sl"}]]
       [:i.fab.fa-github-square
        [:img.imgFoot {:src "assets/gt.png" :alt "gt"}]]]
      [:div.copyright "Copyright© Arifur Rahman Tushar 2019. All rights reserved"]]]]])