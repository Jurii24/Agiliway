(ns app.screen.download.core)

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
         [:img.img-fluid {:src "assets/play.png" :alt "GoogleStore"}]]
        [:a {:href "https://itunes.apple.com/us/app/" :target "_blank"}
         [:img.img-fluid {:src "assets/ios.png" :alt "AppStore"}]]]]]
     [:div.col-lg-6.col-md-6
      [:img.img-fluid {:src "assets/download.png" :alt "download"}]]]]])