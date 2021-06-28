(ns app.core
  (:require
   [reagent.dom :as rdom]
   [app.screen.menu.core :refer [menu]]
   [app.screen.home.core :refer [home]]
   [app.screen.clients.core :refer [clients]]
   [app.screen.features.core :refer [features]]
   [app.screen.jackpot.core :refer [jackpot]]
   [app.screen.integration.core :refer [integration]]
   [app.screen.facts.core :refer [facts]]
   [app.screen.ultimate.core :refer [ultimate]]
   [app.screen.prices.core :refer [prices]]
   [app.screen.testimonials.core :refer [testimonials]]
   [app.screen.faqs.core :refer [faqs]]
   [app.screen.download.core :refer [download]]
   [app.screen.footer.core :refer [footer]]))


(defn app-component  []
  [:<>
   [menu]
   [home]
   [clients]
   [features]
   [jackpot]
   [integration]
   [facts]
   [ultimate]
   [prices]
   [testimonials]
   [faqs]
   [download]
   [footer]
   ]
  )
   

(defn ^:dev/after-load render
  "Render the toplevel component for this app."
  []
  (rdom/render [app-component]
               (.getElementById js/document "app")))

(defn main []
  (js/console.log "MAIN FN Reloaded")
  (render))