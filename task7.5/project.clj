(defproject task7.5 "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/data.json "2.3.1"]
                 [com.amazonaws/aws-lambda-java-core "1.0.0"]]

  :aot :all
  :repl-options {:init-ns task7.5})
