import { NavLink } from '@/components/utilities/NavLink'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiMinus } from 'react-icons/fi'
import Image from 'next/image'
import impressum from '../../images/info/Impressum.jpg'
import Datenschutz from '../../images/info/Datenschutz.jpg'
import Agb from '../../images/info/Agb.jpg'
import cookie from '../../images/info/cookies.jpg'
import Haftung from '../../images/info/Haftung.jpeg'
import Widderufrecht from '../../images/info/Wiederufrecht.jpeg'
import Ladenhinweis from '../../images/info/Akkus.jpeg'
import Batterie from '../../images/info/battery.jpeg'
import { Link } from 'react-scroll'

export function Hero() {
  const [expandedSectionIndex, setExpandedSectionIndex] = useState(null)

  const toggleExpand = (index) => {
    if (expandedSectionIndex === index) {
      setExpandedSectionIndex(null)
    } else {
      setExpandedSectionIndex(index)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center bg-[#7e92a575]">
      <div id="impressum" key={0} className="container rounded-md  ">
        <button
          onClick={() => toggleExpand(0)}
          className="mt-20 flex w-full items-center justify-between px-6 py-4 text-lg font-medium text-gray-800"
        >
          <span className="leading-title text-left text-2xl font-semibold md:text-3xl">
            IMPRESSUM
          </span>
          <motion.span
            className="flex h-12 w-12 items-center justify-center"
            initial={{ rotate: 0 }}
            animate={{ rotate: expandedSectionIndex === 0 ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {expandedSectionIndex === 0 ? (
              <FiMinus className="rotate-90" />
            ) : (
              <FiPlus />
            )}
          </motion.span>
        </button>
        <AnimatePresence>
          {expandedSectionIndex === 0 && (
            <motion.div
              key="content"
              className="p-6 text-gray-700"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="relative h-60 w-full object-cover">
                <Image
                  src={impressum}
                  alt="Title 1"
                  layout="fill"
                  priority={true}
                />
              </div>
              <div className="flex flex-col justify-center">
                <p>
                  <br />
                  Björn Seibert<br></br>
                  BE-SCooTER® ...FUNsport erFAHREN!<br></br>
                  Rodheimer Str. 126<br></br>
                  35452 Heuchelheim<br></br>
                  Deutschland<br></br>
                  <br></br>
                  Tel.: 0641 / 93923404<br></br>
                  Fax: 0641 / 93923402<br></br>
                  E-Mail: info@be-scooter.de<br></br>
                  <br></br>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                  Umsatzsteuergesetz: DE815814992<br></br>
                  <br></br>
                  Plattform der EU-Kommission zur Online-Streitbeilegung:
                  https://ec.europa.eu/odr<br></br>
                  <br></br>
                  Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor
                  einer Verbraucherschlichtungsstelle weder verpflichtet noch
                  bereit.<br></br>
                  <br></br>
                  Verantwortliche/r i.S.d. § 18 Abs. 2 MStV:<br></br>
                  Björn Seibert, Rodheimer Str. 126, 35452 Heuchelheim<br></br>
                  <br></br>
                  <br></br>
                  Mitglied der Initiative &quot;Fairness im Handel&quot;.
                  <br></br>
                  Nähere Informationen: https://www.fairness-im-handel.de{' '}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div id="Datenschutz" key={1} className="container rounded-md  ">
        <button
          onClick={() => toggleExpand(1)}
          className="mt-20 flex w-full items-center justify-between  px-6 py-4 text-lg font-medium text-gray-800"
        >
          <span className="leading-title text-left text-2xl font-semibold md:text-3xl">
            DATENSCHUTZ
          </span>
          <motion.span
            className="flex h-12 w-12 items-center justify-center"
            initial={{ rotate: 0 }}
            animate={{ rotate: expandedSectionIndex === 1 ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {expandedSectionIndex === 1 ? (
              <FiMinus className="rotate-90" />
            ) : (
              <FiPlus />
            )}
          </motion.span>
        </button>
        <AnimatePresence>
          {expandedSectionIndex === 1 && (
            <motion.div
              key="content"
              className="p-6 text-gray-700"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="relative h-60 w-full object-cover">
                <Image
                  src={Datenschutz}
                  alt="Title 1"
                  layout="fill"
                  priority={true}
                />
              </div>
              <div className="flex flex-col justify-center">
                <p>
                  <br />
                  Allgemeiner Hinweis und Pflichtinformationen <br />
                  Benennung der verantwortlichen Stelle <br />
                  Die verantwortliche Stelle für die Datenverarbeitung auf
                  dieser Website ist: <br />
                  BE-SCooTER® <br />
                  Björn Seibert <br />
                  Rodheimer Str. 126 <br />
                  35452 Heuchelheim <br />
                  Deutschland <br />
                  Datenschutzerklärung <br />
                  Datenschutz <br />
                  <br />
                  Wir haben diese Datenschutzerklärung (Fassung
                  16.12.2019-311136352) verfasst, um Ihnen gemäß der Vorgaben
                  der Datenschutz-Grundverordnung (EU) 2016/679 zu erklären,
                  welche Informationen wir sammeln, wie wir Daten verwenden und
                  welche Entscheidungsmöglichkeiten Sie als Besucher dieser
                  Webseite haben. Leider liegt es in der Natur der Sache, dass
                  diese Erklärungen sehr technisch klingen, wir haben uns bei
                  der Erstellung jedoch bemüht die wichtigsten Dinge so einfach
                  und klar wie möglich zu beschreiben. Automatische
                  Datenspeicherung Wenn Sie heutzutage Webseiten besuchen,
                  werden gewisse Informationen automatisch erstellt und
                  gespeichert, so auch auf dieser Webseite. Wenn Sie unsere
                  Webseite so wie jetzt gerade besuchen, speichert unser
                  Webserver (Computer auf dem diese Webseite gespeichert ist)
                  automatisch Daten wie die Adresse (URL) der aufgerufenen
                  Webseite Browser und Browserversion das verwendete
                  Betriebssystem die Adresse (URL) der zuvor besuchten Seite
                  (Referrer URL) den Hostname und die IP-Adresse des Geräts von
                  welchem aus zugegriffen wird Datum und Uhrzeit in Dateien
                  (Webserver-Logfiles). In der Regel werden Webserver-Logfiles
                  zwei Wochen gespeichert und danach automatisch gelöscht. Wir
                  geben diese Daten nicht weiter, können jedoch nicht
                  ausschließen, dass diese Daten beim Vorliegen von
                  rechtswidrigem Verhalten eingesehen werden. Die
                  Rechtsgrundlage besteht nach Artikel 6 Absatz 1 f DSGVO
                  (Rechtmäßigkeit der Verarbeitung) darin, dass berechtigtes
                  Interesse daran besteht, den fehlerfreien Betrieb dieser
                  Webseite durch das Erfassen von Webserver-Logfiles zu
                  ermöglichen. Cookies Unsere Website verwendet HTTP-Cookies um
                  nutzerspezifische Daten zu speichern. Im Folgenden erklären
                  wir, was Cookies sind und warum Sie genutzt werden, damit Sie
                  die folgende Datenschutzerklärung besser verstehen. Was genau
                  sind Cookies? Immer wenn Sie durch das Internet surfen,
                  verwenden Sie einen Browser. Bekannte Browser sind
                  beispielsweise Chrome, Safari, Firefox, Internet Explorer und
                  Microsoft Edge. Die meisten Webseiten speichern kleine
                  Text-Dateien in Ihrem Browser. Diese Dateien nennt man
                  Cookies. Eines ist nicht von der Hand zu weisen: Cookies sind
                  echt nützliche Helferlein. Fast alle Webseiten verwenden
                  Cookies. Genauer gesprochen sind es HTTP-Cookies, da es auch
                  noch andere Cookies für andere Anwendungsbereiche gibt.
                  HTTP-Cookies sind kleine Dateien, die von unserer Website auf
                  Ihrem Computer gespeichert werden. Diese Cookie-Dateien werden
                  automatisch im Cookie-Ordner, quasi dem “Hirn” Ihres Browsers,
                  untergebracht. Ein Cookie besteht aus einem Namen und einem
                  Wert. Bei der Definition eines Cookies müssen zusätzlich ein
                  oder mehrere Attribute angegeben werden. Cookies speichern
                  gewisse Nutzerdaten von Ihnen, wie beispielsweise Sprache oder
                  persönliche Seiteneinstellungen. Wenn Sie unsere Seite wieder
                  aufrufen, übermittelt Ihr Browser die „userbezogenen“
                  Informationen an unsere Seite zurück. Dank der Cookies weiß
                  unsere Website, wer Sie sind und bietet Ihnen Ihre gewohnte
                  Standardeinstellung. In einigen Browsern hat jedes Cookie eine
                  eigene Datei, in anderen wie beispielsweise Firefox sind alle
                  Cookies in einer einzigen Datei gespeichert. Es gibt sowohl
                  Erstanbieter Cookies als auch Drittanbieter-Cookies.
                  Erstanbieter-Cookies werden direkt von unserer Seite erstellt,
                  Drittanbieter-Cookies werden von Partner-Webseiten (z.B.
                  Google Analytics) erstellt. Jedes Cookie ist individuell zu
                  bewerten, da jedes Cookie andere Daten speichert. Auch die
                  Ablaufzeit eines Cookies variiert von ein paar Minuten bis hin
                  zu ein paar Jahren. Cookies sind keine Software-Programme und
                  enthalten keine Viren, Trojaner oder andere „Schädlinge“.
                  Cookies können auch nicht auf Informationen Ihres PCs
                  zugreifen. So können zum Beispiel Cookie-Daten aussehen: Name:
                  _ga Ablaufzeit: 2 Jahre Verwendung: Unterscheidung der
                  Webseitenbesucher Beispielhafter Wert:
                  GA1.2.1326744211.152311136352 Ein Browser sollte folgende
                  Mindestgrößen unterstützen: Ein Cookie soll mindestens 4096
                  Bytes enthalten können Pro Domain sollen mindestens 50 Cookies
                  gespeichert werden können Insgesamt sollen mindestens 3000
                  Cookies gespeichert werden können Welche Arten von Cookies
                  gibt es? Die Frage welche Cookies wir im Speziellen verwenden,
                  hängt von den verwendeten Diensten ab und wird in der
                  folgenden Abschnitten der Datenschutzerklärung geklärt. An
                  dieser Stelle möchten wir kurz auf die verschiedenen Arten von
                  HTTP-Cookies eingehen. Man kann 4 Arten von Cookies
                  unterscheiden: Unbedingt notwendige Cookies Diese Cookies sind
                  nötig, um grundlegende Funktionen der Website sicherzustellen.
                  Zum Beispiel braucht es diese Cookies, wenn ein User ein
                  Produkt in den Warenkorb legt, dann auf anderen Seiten
                  weitersurft und später erst zur Kasse geht. Durch diese
                  Cookies wird der Warenkorb nicht gelöscht, selbst wenn der
                  User sein Browserfenster schließt. Funktionelle Cookies Diese
                  Cookies sammeln Infos über das Userverhalten und ob der User
                  etwaige Fehlermeldungen bekommt. Zudem werden mithilfe dieser
                  Cookies auch die Ladezeit und das Verhalten der Website bei
                  verschiedenen Browsern gemessen. Zielorientierte Cookies Diese
                  Cookies sorgen für eine bessere Nutzerfreundlichkeit.
                  Beispielsweise werden eingegebene Standorte, Schriftgrößen
                  oder Formulardaten gespeichert. Werbe-Cookies Diese Cookies
                  werden auch Targeting-Cookies genannt. Sie dienen dazu dem
                  User individuell angepasste Werbung zu liefern. Das kann sehr
                  praktisch, aber auch sehr nervig sein. Üblicherweise werden
                  Sie beim erstmaligen Besuch einer Webseite gefragt, welche
                  dieser Cookiearten Sie zulassen möchten. Und natürlich wird
                  diese Entscheidung auch in einem Cookie gespeichert. Wie kann
                  ich Cookies löschen? Wie und ob Sie Cookies verwenden wollen,
                  entscheiden Sie selbst. Unabhängig von welchem Service oder
                  welcher Website die Cookies stammen, haben Sie immer die
                  Möglichkeit Cookies zu löschen, nur teilweise zuzulassen oder
                  zu deaktivieren. Zum Beispiel können Sie Cookies von
                  Drittanbietern blockieren, aber alle anderen Cookies zulassen.
                  Wenn Sie feststellen möchten, welche Cookies in Ihrem Browser
                  gespeichert wurden, wenn Sie Cookie-Einstellungen ändern oder
                  löschen wollen, können Sie dies in Ihren Browser-Einstellungen
                  finden: Chrome: Cookies in Chrome löschen, aktivieren und
                  verwalten Safari: Verwalten von Cookies und Websitedaten mit
                  Safari Firefox: Cookies löschen, um Daten zu entfernen, die
                  Websites auf Ihrem Computer abgelegt haben Internet Explorer:
                  Löschen und Verwalten von Cookies Microsoft Edge: Löschen und
                  Verwalten von Cookies Falls Sie grundsätzlich keine Cookies
                  haben wollen, können Sie Ihren Browser so einrichten, dass er
                  Sie immer informiert, wenn ein Cookie gesetzt werden soll. So
                  können Sie bei jedem einzelnen Cookie entscheiden, ob Sie das
                  Cookie erlauben oder nicht. Die Vorgangsweise ist je nach
                  Browser verschieden. Am besten ist es Sie suchen die Anleitung
                  in Google mit dem Suchbegriff “Cookies löschen Chrome” oder
                  “Cookies deaktivieren Chrome” im Falle eines Chrome Browsers
                  oder tauschen das Wort “Chrome” gegen den Namen Ihres
                  Browsers, z.B. Edge, Firefox, Safari aus. Wie sieht es mit
                  meinem Datenschutz aus? Seit 2009 gibt es die sogenannten
                  „Cookie-Richtlinien“. Darin ist festgehalten, dass das
                  Speichern von Cookies eine Einwilligung des Website-Besuchers
                  (also von Ihnen) verlangt. Innerhalb der EU-Länder gibt es
                  allerdings noch sehr unterschiedliche Reaktionen auf diese
                  Richtlinien. In Deutschland wurden die Cookie-Richtlinien
                  nicht als nationales Recht umgesetzt. Stattdessen erfolgte die
                  Umsetzung dieser Richtlinie weitgehend in § 15 Abs.3 des
                  Telemediengesetzes (TMG). Wenn Sie mehr über Cookies wissen
                  möchten und vor technischen Dokumentationen nicht
                  zurückscheuen, empfehlen wir
                  https://tools.ietf.org/html/rfc6265, dem Request for Comments
                  der Internet Engineering Task Force (IETF) namens “HTTP State
                  Management Mechanism”. Speicherung persönlicher Daten
                  Persönliche Daten, die Sie uns auf dieser Website elektronisch
                  übermitteln, wie zum Beispiel Name, E-Mail-Adresse, Adresse
                  oder andere persönlichen Angaben im Rahmen der Übermittlung
                  eines Formulars oder Kommentaren im Blog, werden von uns
                  gemeinsam mit dem Zeitpunkt und der IP-Adresse nur zum jeweils
                  angegebenen Zweck verwendet, sicher verwahrt und nicht an
                  Dritte weitergegeben. Wir nutzen Ihre persönlichen Daten somit
                  nur für die Kommunikation mit jenen Besuchern, die Kontakt
                  ausdrücklich wünschen und für die Abwicklung der auf dieser
                  Webseite angebotenen Dienstleistungen und Produkte. Wir geben
                  Ihre persönlichen Daten ohne Zustimmung nicht weiter, können
                  jedoch nicht ausschließen, dass diese Daten beim Vorliegen von
                  rechtswidrigem Verhalten eingesehen werden. Wenn Sie uns
                  persönliche Daten per E-Mail schicken – somit abseits dieser
                  Webseite – können wir keine sichere Übertragung und den Schutz
                  Ihrer Daten garantieren. Wir empfehlen Ihnen, vertrauliche
                  Daten niemals unverschlüsselt per E-Mail zu übermitteln. Die
                  Rechtsgrundlage besteht nach Artikel 6 Absatz 1 a DSGVO
                  (Rechtmäßigkeit der Verarbeitung) darin, dass Sie uns die
                  Einwilligung zur Verarbeitung der von Ihnen eingegebenen Daten
                  geben. Sie können diesen Einwilligung jederzeit widerrufen –
                  eine formlose E-Mail reicht aus, Sie finden unsere
                  Kontaktdaten im Impressum. Rechte laut
                  Datenschutzgrundverordnung Ihnen stehen laut den Bestimmungen
                  der DSGVO grundsätzlich die folgende Rechte zu: Recht auf
                  Berichtigung (Artikel 16 DSGVO) Recht auf Löschung („Recht auf
                  Vergessenwerden“) (Artikel 17 DSGVO) Recht auf Einschränkung
                  der Verarbeitung (Artikel 18 DSGVO) Recht auf Benachrichtigung
                  – Mitteilungspflicht im Zusammenhang mit der Berichtigung oder
                  Löschung personenbezogener Daten oder der Einschränkung der
                  Verarbeitung (Artikel 19 DSGVO) Recht auf Datenübertragbarkeit
                  (Artikel 20 DSGVO) Widerspruchsrecht (Artikel 21 DSGVO) Recht,
                  nicht einer ausschließlich auf einer automatisierten
                  Verarbeitung — einschließlich Profiling — beruhenden
                  Entscheidung unterworfen zu werden (Artikel 22 DSGVO) Wenn Sie
                  glauben, dass die Verarbeitung Ihrer Daten gegen das
                  Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen
                  Ansprüche sonst in einer Weise verletzt worden sind, können
                  Sie sich an die Bundesbeauftragte für den Datenschutz und die
                  Informationsfreiheit (BfDI) wenden. Auswertung des
                  Besucherverhaltens In der folgenden Datenschutzerklärung
                  informieren wir Sie darüber, ob und wie wir Daten Ihres
                  Besuchs dieser Website auswerten. Die Auswertung der
                  gesammelten Daten erfolgt in der Regel anonym und wir können
                  von Ihrem Verhalten auf dieser Website nicht auf Ihre Person
                  schließen. Mehr über Möglichkeiten dieser Auswertung der
                  Besuchsdaten zu widersprechen erfahren Sie in der folgenden
                  Datenschutzerklärung. TLS-Verschlüsselung mit https Wir
                  verwenden https um Daten abhörsicher im Internet zu übertragen
                  (Datenschutz durch Technikgestaltung Artikel 25 Absatz 1
                  DSGVO). Durch den Einsatz von TLS (Transport Layer Security),
                  einem Verschlüsselungsprotokoll zur sicheren Datenübertragung
                  im Internet können wir den Schutz vertraulicher Daten
                  sicherstellen. Sie erkennen die Benutzung dieser Absicherung
                  der Datenübertragung am kleinen Schloßsymbol links oben im
                  Browser und der Verwendung des Schemas https (anstatt http)
                  als Teil unserer Internetadresse. Google AdSense
                  Datenschutzerklärung Wir verwenden auf dieser Webseite Google
                  AdSense, dem Anzeigenprogramm der Firma Google Inc. (1600
                  Amphitheatre Parkway Mountain View, CA 94043, USA). Mit Google
                  AdSense können wir auf dieser Webseite Werbeanzeigen
                  einblenden, die zu unserem Thema passen. So bieten wir Ihnen
                  Anzeigen, die im Idealfall einen richtigen Mehrwert für Sie
                  darstellen. Im Zuge dieser Datenschutzerklärung über Google
                  AdSense erklären wir Ihnen, warum wir Google AdSense auf
                  unserer Webseite verwenden, welche Daten von Ihnen verarbeitet
                  und gespeichert werden und wie Sie diese Datenspeicherung
                  unterbinden können. Rechtsgrundlage für die Verwendung von
                  Google AdSense ist Artikel 6 (1) f (Rechtmäßigkeit der
                  Verarbeitung), denn es besteht ein berechtigtes Interesse
                  gezielte Werbemaßnahmen durchzuführen. Was ist Google AdSense?
                  Google AdSense gibt es mittlerweile seit 2003 und ist ein
                  Werbeprogramm der Firma Google. Im Gegensatz zu Google Ads
                  (früher: Google AdWords) kann man hier nicht selbst Werbung
                  schalten. Über Google AdSense werden Werbeanzeigen auf
                  Webseiten, wie zum Beispiel auf unserer, ausgespielt. Der
                  größte Vorteil dieses Werbedienstes im Vergleich zu manch
                  anderen ist, dass Ihnen Google AdSense nur Anzeigen zeigt, die
                  zu unseren Inhalten passen. Google hat einen eigenen
                  Algorithmus, der berechnet, welche Werbeanzeigen Sie zu
                  Gesicht bekommen. Natürlich wollen wir Ihnen nur Werbung
                  bieten, die Sie auch interessiert und Ihnen einen Mehrwert
                  bietet. Google überprüft anhand Ihrer Interessen bzw. Ihres
                  Userverhaltens und anhand unseres Angebots, welche
                  Werbeanzeigen für unsere Webseite und für unserer User
                  geeignet sind. An dieser Stelle wollen wir auch gleich
                  erwähnen, dass wir für die Auswahl der Werbeanzeigen folglich
                  nicht verantwortlich sind. Wir bieten mit unserer Website
                  lediglich die Werbefläche an. Die Auswahl der angezeigten
                  Werbung trifft Google. Seit August 2013 werden die Anzeigen
                  auch an die jeweilige Benutzeroberfläche angepasst. Das heißt,
                  egal ob Sie von Ihrem Smartphone, Ihrem PC oder Laptop unsere
                  Webseite besuchen, die Anzeigen passen sich an Ihr Endgerät
                  an. Warum verwenden wir Google AdSense auf unserer Webseite?
                  Das Betreiben einer qualitativ hochwertigen Webseite erfordert
                  viel Hingabe und großen Einsatz. Im Grunde sind wir mit der
                  Arbeit an unserer Webseite nie fertig. Wir versuchen stets
                  unsere Seite zu pflegen und so aktuell wie möglich zu halten.
                  Natürlich wollen wir mit dieser Arbeit auch einen
                  wirtschaftlichen Erfolg erzielen. Darum haben wir uns für
                  Werbeanzeigen als Einnahmequelle entschieden. Das Wichtigste
                  für uns ist allerdings, Ihren Besuch auf unserer Webseite
                  durch diese Anzeigen nicht zu stören. Mithilfe von Google
                  AdSense wird Ihnen nur Werbung angeboten, die zu unseren
                  Themen und Ihren Interessen passt. Ähnlich wie bei der
                  Google-Indexierung für eine Webseite, untersucht ein Bot den
                  entsprechenden Content und die entsprechenden Angebote unserer
                  Webseite. Dann werden die Werbeanzeigen inhaltlich angepasst
                  und auf der Webseite präsentiert. Neben den inhaltlichen
                  Überschneidungen zwischen Anzeige und Webseiten-Angebot
                  unterstützt AdSense auch interessensbezogenes Targeting. Das
                  bedeutet, dass Google auch Ihre Daten dazu verwendet, um auf
                  Sie zugeschnittene Werbung anzubieten. So erhalten Sie
                  Werbung, die Ihnen im Idealfall einen echten Mehrwert bietet
                  und wir haben eine höhere Chance ein bisschen etwas zu
                  verdienen. Welche Daten werden von Google AdSense gespeichert?
                  Damit Google AdSense eine maßgeschneiderte, auf Sie angepasste
                  Werbung anzeigen kann, werden unter anderem Cookies verwendet.
                  Cookies sind kleine Textdateien, die bestimmte Informationen
                  auf Ihrem Computer speichern. In AdSense sollen Cookies
                  bessere Werbung ermöglichen. Die Cookies enthalten keine
                  personenidentifizierbaren Daten. Hierbei ist allerdings zu
                  beachten, dass Google Daten wie zum Beispiel “Pseudonyme
                  Cookie-IDs” (Name oder anderes Identifikationsmerkmal wird
                  durch ein Pseudonym ersetzt) oder IP-Adressen als nicht
                  personenidentifizierbare Informationen ansieht. Im Rahmen der
                  DSGVO können diese Daten allerdings als personenbezogene Daten
                  gelten. Google AdSense sendet nach jeder Impression (das ist
                  immer dann der Fall, wenn Sie eine Anzeige sehen), jedem Klick
                  und jeder anderen Aktivität, die zu einem Aufruf der Google
                  AdSense-Server führt, ein Cookie an den Browser. Sofern der
                  Browser das Cookie akzeptiert, wird es dort gespeichert.
                  Drittanbieter können im Rahmen von AdSense unter Umständen
                  Cookies in Ihrem Browser platzieren und auslesen bzw.
                  Web-Beacons verwenden, um Daten zu speichern, die sie durch
                  die Anzeigenbereitstellung auf der Webseite erhalten. Web
                  Beacons sind kleine Grafiken, die eine Logdatei-Aufzeichnung
                  und eine Logdatei-Analyse ermöglichen. Diese Analyse
                  ermöglicht eine statistische Auswertung für das
                  Online-Marketing. Google kann über diese Cookies bestimmte
                  Informationen über Ihr Userverhalten auf unserer Webseite
                  sammeln. Dazu zählen: Informationen wie Sie mit einer Anzeige
                  umgehen (Klicks, Impression, Mausbewegungen) Informationen, ob
                  in Ihrem Browser schon eine Anzeige zu einem früheren
                  Zeitpunkt erschienen ist. Diese Daten helfen dabei, Ihnen eine
                  Anzeige nicht öfter anzuzeigen. Dabei analysiert Google die
                  Daten zu den angezeigten Werbemitteln und Ihre IP-Adresse und
                  wertet diese aus. Google verwendet die Daten in erster Linie,
                  um die Effektivität einer Anzeige zu messen und das
                  Werbeangebot zu verbessern. Diese Daten werden nicht mit
                  personenbezogenen Daten, die Google möglicherweise über andere
                  Google-Dienste von Ihnen hat, verknüpft. Im Folgenden stellen
                  wir Ihnen Cookies vor, die Google AdSense für Trackingzwecke
                  verwendet. Hierbei beziehen wir uns auf eine Test-Webseite,
                  die ausschließlich Google AdSense installiert hat: Name: uid
                  Ablaufzeit: nach 2 Monaten Verwendung: Das Cookie wird unter
                  der Domain adform.net gespeichert. Es stellt eine eindeutig
                  zugewiesene, maschinell generierte User-ID bereit und sammelt
                  Daten über die Aktivität auf unserer Webseite. Beispielwert:
                  891269189311136352 Name: C Ablaufzeit: nach 1 Monat
                  Verwendung: Dieses Cookie identifiziert, ob Ihrer Browser
                  Cookies akzeptiert. Das Cookie wird unter der Domain
                  track.adform.net gespeichert. Beispielwert: 1 Name: cid
                  Ablaufzeit: nach 2 Monaten Verwendung: Dieses Cookie wird
                  unter der Domain track.adform.net gespeichert, steht für
                  Client-ID und wird verwendet, um die Werbung für Sie zu
                  verbessern. Es kann relevantere Werbung an den Besucher
                  weiterleiten und hilft, die Berichte über die
                  Kampagnenleistung zu verbessern. Beispielwert:
                  8912691894970695056,0,0,0,0 Name: IDE Ablaufzeit: nach 1 Monat
                  Verwendung: Das Cookie wird unter der Domain doubkeklick.net
                  gespeichert. Es dient dazu, Ihre Aktionen nach der Anzeige
                  bzw. nach dem Klicken der Anzeige zu registrieren. Dadurch
                  kann man messen, wie gut eine Anzeige bei unseren Besuchern
                  ankommt. Beispielwert: zOtj4TWxwbFDjaATZ2TzNaQmxrU311136352
                  Name: test_cookie Ablaufzeit: nach 1 Monat Verwendung:
                  Mithilfe des „test_cookies“ kann man überprüfen, ob Ihr
                  Browser überhaupt Cookies unterstützt. Das Cookie wird unter
                  der Domain doubkeklick.net gespeichert. Beispielwert: keine
                  Angabe Name: CT592996 Ablaufzeit: nach einer Stunde
                  Verwendung: Wird unter der Domain adform.net gespeichert. Das
                  Cookie wird gesetzt sobald Sie auf eine Werbeanzeige klicken.
                  Genauere Informationen über die Verwendung dieses Cookies
                  konnten wir nicht in Erfahrung bringen. Beispielwert: 733366
                  Anmerkung: Diese Aufzählung kann keinen Anspruch auf
                  Vollständigkeit erheben, da Google erfahrungsgemäß die Wahl
                  ihrer Cookies immer wieder auch verändert. Wie lange und wo
                  werden die Daten gespeichert? Google erfasst Ihre IP-Adresse
                  und verschiedene Aktivitäten, die Sie auf der Webseite
                  ausführen. Cookies speichern diese Informationen zu den
                  Interaktionen auf unsere Webseite. Laut Google sammelt und
                  speichert das Unternehmen die angegebenen Informationen auf
                  sichere Weise auf den hauseigenen Google-Servern in den USA.
                  Wenn Sie kein Google-Konto haben bzw. nicht angemeldet sind,
                  speichert Google die erhobenen Daten mit einer eindeutigen
                  Kennung (ID) meist auf Ihrem Browser. Die in Cookies
                  gespeicherten eindeutigen IDs dienen beispielsweise dazu,
                  personalisierte Werbung zu gewährleisten. Wenn Sie in einem
                  Google-Konto angemeldet sind, kann Google auch
                  personenbezogene Daten erheben. Einige der Daten, die Google
                  speichert, können Sie jederzeit wieder löschen (siehe nächsten
                  Abschnitt). Viele Informationen, die in Cookies gespeichert
                  sind, werden automatisch nach einer bestimmten Zeit wieder
                  gelöscht. Es gibt allerdings auch Daten, die von Google über
                  einen längeren Zeitraum gespeichert werden. Dies ist dann der
                  Fall, wenn Google aus wirtschaftlichen oder rechtlichen
                  Notwendigkeiten, gewisse Daten über einen unbestimmten,
                  längeren Zeitraum speichern muss. Wie kann ich meine Daten
                  löschen bzw. die Datenspeicherung verhindern? Sie haben immer
                  die Möglichkeit Cookies, die sich auf Ihrem Computer befinden,
                  zu löschen oder zu deaktivieren. Wie genau das funktioniert
                  hängt von Ihrem Browser ab. Hier finden Sie die Anleitung, wie
                  Sie Cookies in Ihrem Browser verwalten: Chrome: Cookies in
                  Chrome löschen, aktivieren und verwalten Safari: Verwalten von
                  Cookies und Websitedaten mit Safari Firefox: Cookies löschen,
                  um Daten zu entfernen, die Websites auf Ihrem Computer
                  abgelegt haben Internet Explorer: Löschen und Verwalten von
                  Cookies Microsoft Edge: Löschen und Verwalten von Cookies
                  Falls Sie grundsätzlich keine Cookies haben wollen, können Sie
                  Ihren Browser so einrichten, dass er Sie immer informiert,
                  wenn ein Cookie gesetzt werden soll. So können Sie bei jedem
                  einzelnen Cookie entscheiden, ob Sie das Cookie erlauben oder
                  nicht. Durch das Herunterladen und Installieren dieses
                  Browser-Plug-ins auf
                  https://support.google.com/ads/answer/
                  <br />
                  7395996 werden ebenfalls
                  alle „Werbecookies“ deaktiviert. Bedenken Sie, dass Sie durch
                  das Deaktivieren dieser Cookies nicht die Werbeanzeigen
                  verhindern, sondern nur die personalisierte Werbung. Wenn Sie
                  ein Google Konto besitzen, können Sie auf der Webseite
                  https://adssettings.google.com/authenticated personalisierte
                  Werbung deaktivieren. Auch hier sehen Sie dann weiter
                  Anzeigen, allerdings sind diese nicht mehr an Ihre Interessen
                  angepasst. Dennoch werden die Anzeigen auf der Grundlage von
                  ein paar Faktoren wie Ihrem Standort (wird aus Ihrer
                  IP-Adresse abgeleitet), dem Browsertyp und der verwendeten
                  Suchbegriffe angezeigt. Welche Daten Google grundsätzlich
                  erfasst und wofür sie diese Daten verwenden, können Sie auf
                  https://www.google.com/intl/de/
                  <br />
                  policies/privacy/ nachlesen.
                  Google Ads (Google AdWords) Conversion-Tracking
                  Datenschutzerklärung Wir verwenden als
                  Online-Marketing-Maßnahme Google Ads (früher Google AdWords),
                  um unsere Produkte, Angebote und Dienstleistungen zu bewerben.
                  So wollen wir im Internet mehr Menschen auf die hohe Qualität
                  unserer Angebote aufmerksam machen. Im Rahmen unserer
                  Werbe-Maßnahmen durch Google Ads verwenden wir auf unserer
                  Website das Conversion-Tracking der Google LLC., 1600
                  Amphitheatre Parkway, Mountain View, CA 94043, USA (“Google”).
                  Mithilfe dieses kostenlosen Tracking-Tools können wir unser
                  Werbeangebot an Ihre Interessen und Bedürfnisse deutlich
                  besser anpassen. Im Folgenden Artikel wollen wir genauer
                  darauf eingehen, warum wir Conversion-Tracking benutzen,
                  welche Daten dabei gespeichert werden und wie Sie diese
                  Datenspeicherung verhindern können. Rechtsgrundlage für die
                  Verwendung von Google Ads Conversion-Tracking ist Artikel 6
                  (1) f (Rechtmäßigkeit der Verarbeitung), denn es besteht ein
                  berechtigtes Interesse gezielte Werbemaßnahmen durchzuführen.
                  Was ist Google Ads Conversion-Tracking? Google Ads (früher
                  Google AdWords) ist das hauseigene Online-Werbesystem der
                  Firma Google LLC. Wir können über Google Ads Online-Anzeigen
                  erstellen, um interessierten Menschen unsere Produkte oder
                  Dienstleistungen näher zu bringen. Wir sind von der Qualität
                  unseres Angebots überzeugt und wollen, dass so viele Menschen
                  wie möglich unsere Webseite kennenlernen. Im Onlinebereich
                  bietet Google Ads dafür die beste Plattform. Natürlich wollen
                  wir auch einen genauen Überblick über den Kosten-Nutzen-Faktor
                  unsere Werbeaktionen gewinnen. Darum verwenden wir das
                  Conversion-Tracking-Tool von Google Ads. Doch was ist eine
                  Conversion eigentlich? Eine Conversion entsteht, wenn Sie von
                  einem rein interessierten Websitebesucher zu einem handelnden
                  Besucher werden. Dies passiert immer dann, wenn Sie auf unsere
                  Anzeige klicken und im Anschluss eine andere Aktion ausführen,
                  wie zum Beispiel unsere Website besuchen. Mit dem
                  Conversion-Tracking-Tool von Google erfassen wir, was nach
                  einem Klick eines Users auf unsere Google Ads-Anzeige
                  geschieht. Zum Beispiel können wir so sehen, ob Produkte
                  gekauft werden, Dienstleistungen in Anspruch genommen werden
                  oder ob sich User für unseren Newsletter angemeldet haben.
                  Warum verwenden wir Google Ads Conversion-Tracking auf unserer
                  Website? Wir setzen Google Ads ein, um auch auf anderen
                  Webseiten auf unser Angebot aufmerksam zu machen. Ziel ist es,
                  dass unsere Werbekampagnen wirklich auch nur jene Menschen
                  erreichen, die sich für unsere Produkte und Angebote
                  interessieren. Mit dem Conversion-Tracking Tool sehen wir
                  welche Keywords, Anzeigen, Anzeigengruppen und Kampagnen zu
                  den gewünschten Kundenaktionen führen. Wir sehen, wie viele
                  Kunden mit unseren Anzeigen auf einem Gerät oder in einem
                  Browser interagieren und dann eine Conversion durchführen.
                  Durch diese Daten können wir unseren Kosten-Nutzen-Faktor
                  berechnen, den Erfolg einzelner Werbemaßnahmen messen und
                  folglich unsere Online-Marketing-Maßnahmen optimieren. Wir
                  können weiters mithilfe der gewonnenen Daten unsere Website
                  für Sie interessanter gestalten und unser Werbeangebot noch
                  individueller auf Ihre Bedürfnisse anpassen. Welche Daten
                  werden bei Google Ads Conversion-Tracking gespeichert? Wir
                  haben ein Conversion-Tracking-Tag oder Code-Snippet auf
                  unserer Website eingebunden, um gewisse User-Aktionen besser
                  analysieren zu können. Wenn Sie nun eine unserer Google
                  Ads-Anzeigen anklicken, wird auf Ihrem Computer (meist im
                  Browser) oder Mobilgerät das Cookie „Conversion“ von einer
                  Google-Domain gespeichert. Cookies sind kleine Textdateien,
                  die Informationen auf Ihrem Computer speichern. Hier die Daten
                  der wichtigsten Cookies für das Conversion-Tracking von
                  Google: Name: Conversion Ablaufzeit: nach 3 Monaten
                  Beispielwert:
                  EhMI_aySuoyv4gIVled3Ch0llweVGAEgt-mr6aXd7dYlSAGQ311136352
                  Name: _gac Ablaufzeit: nach 3 Monaten Beispielwert:
                  1.1558695989.EAIaIQobChMIiOmEgY
                  <br />
                  O04gIVj5AY
                  <br />
                  Ch2CBAPrEAAYASAAEgIYQfD_BwE
                  Anmerkung: Das Cookie _gac scheint nur in Verbindung mit
                  Google Analytics auf. Die oben angeführte Aufzählung hat
                  keinen Anspruch auf Vollständigkeit, da Google für analytische
                  Auswertung immer wieder auch andere Cookies verwendet. Sobald
                  Sie eine Aktion auf unserer Website abschließen, erkennt
                  Google das Cookie und speichert Ihre Handlung als sogenannte
                  Conversion. Solange Sie auf unserer Website surfen und das
                  Cookie noch nicht abgelaufen ist, erkennen wir und Google,
                  dass Sie über unsere Google-Ads-Anzeige zu uns gefunden haben.
                  Das Cookie wird ausgelesen und mit den Conversion-Daten zurück
                  an Google Ads gesendet. Es ist auch möglich, dass noch andere
                  Cookies zur Messung von Conversions verwendet werden. Das
                  Conversion-Tracking von Google Ads kann mithilfe von Google
                  Analytics noch verfeinert und verbessert werden. Bei Anzeigen,
                  die Google an verschiedenen Orten im Web anzeigt, werden unter
                  unserer Domain möglicherweise Cookies mit dem Namen “__gads”
                  oder “_gac” gesetzt. Seit September 2017 werden diverse
                  Kampagneninformationen von analytics.js mit dem _gac-Cookie
                  gespeichert. Das Cookie speichert diese Daten, sobald Sie eine
                  unserer Seiten aufrufen, für die die automatische
                  Tag-Kennzeichnung von Google Ads eingerichtet wurde. Im
                  Gegensatz zu Cookies, die für Google-Domains gesetzt werden,
                  kann Google diese Conversion-Cookies nur lesen, wenn Sie sich
                  auf unserer Website befinden. Wir erheben und erhalten keine
                  personenbezogenen Daten. Wir bekommen von Google einen Bericht
                  mit statistischen Auswertungen. So erfahren wir beispielsweise
                  die Gesamtanzahl der User, die unsere Anzeige angeklickt haben
                  und wir sehen, wie gut welche Werbemaßnahme angekommen ist.
                  Wie lange und wo werden die Daten gespeichert? An dieser
                  Stelle wollen wir darauf hinweisen, dass wir keinen Einfluss
                  darauf haben, wie Google die, durch das
                  Conversion-Tracking-Tool, erhobenen Daten weiterverwendet.
                  Laut Google werden die Daten verschlüsselt und auf sicheren
                  Servern gespeichert. In den meisten Fällen laufen
                  Conversion-Cookies nach 30 Tagen ab und übermitteln keine
                  personenbezogenen Daten. Die Cookies mit dem Namen
                  „Conversion“ und „_gac“ (das in Verbindung mit Google
                  Analytics zum Einsatz kommt) haben ein Ablaufdatum von 3
                  Monaten. Wie kann ich meine Daten löschen bzw. die
                  Datenspeicherung verhindern? Sie haben die Möglichkeit am
                  Conversion-Tracking von Google Ads nicht teilzunehmen. Wenn
                  Sie das Cookie des Google Conversion-Tracking über Ihren
                  Browser deaktivieren, blockieren Sie das Conversion-Tracking.
                  In diesem Fall werden Sie in der Statistik des Tracking-Tools
                  nicht berücksichtigt. Sie können die Cookie-Einstellungen in
                  Ihrem Browser jederzeit verändern. Bei jedem Browser
                  funktioniert dies etwas anders. Hier finden Sie die Anleitung,
                  wie Sie Cookies in Ihrem Browser verwalten: Chrome: Cookies in
                  Chrome löschen, aktivieren und verwalten Safari: Verwalten von
                  Cookies und Websitedaten mit Safari Firefox: Cookies löschen,
                  um Daten zu entfernen, die Websites auf Ihrem Computer
                  abgelegt haben Internet Explorer: Löschen und Verwalten von
                  Cookies Microsoft Edge: Löschen und Verwalten von Cookies
                  Falls Sie grundsätzlich keine Cookies haben wollen, können Sie
                  Ihren Browser so einrichten, dass er Sie immer informiert,
                  wenn ein Cookie gesetzt werden soll. So können Sie bei jedem
                  einzelnen Cookie entscheiden, ob Sie das Cookie erlauben oder
                  nicht. Durch das Herunterladen und Installieren dieses
                  Browser-Plug-ins auf
                  https://support.google.com/ads/
                  <br />
                  answer/7395996 werden ebenfalls
                  alle „Werbecookies“ deaktiviert. Bedenken Sie, dass Sie durch
                  das Deaktivieren dieser Cookies nicht die Werbeanzeigen
                  verhindern, sondern nur die personalisierte Werbung. Durch die
                  Zertifizierung für das amerikanische-europäische
                  Datenschutzübereinkommen “Privacy Shield”, muss der
                  amerikanische Konzern Google LLC die in der EU geltenden
                  Datenschutzgesetze einhalten. Wenn Sie Näheres über den
                  Datenschutz bei Google erfahren möchten, empfehlen wir die
                  allgemeine Datenschutzerklärung von Google:
                  https://policies.google.com/
                  <br />
                  privacy?hl=de. Newsletter
                  Datenschutzerklärung Wenn Sie sich für unseren Newsletter
                  eintragen übermitteln Sie die oben genannten persönlichen
                  Daten und geben uns das Recht Sie per E-Mail zu kontaktieren.
                  Die im Rahmen der Anmeldung zum Newsletter gespeicherten Daten
                  nutzen wir ausschließlich für unseren Newsletter und geben
                  diese nicht weiter. Sollten Sie sich vom Newsletter abmelden –
                  Sie finden den Link dafür in jedem Newsletter ganz unten –
                  dann löschen wir alle Daten die mit der Anmeldung zum
                  Newsletter gespeichert wurden. Google Fonts Lokal
                  Datenschutzerklärung Wir verwenden Google Fonts der Firma
                  Google Inc. (1600 Amphitheatre Parkway Mountain View, CA
                  94043, USA) auf unserer Webseite. Wir haben die
                  Google-Schriftarten lokal, d.h. auf unserem Webserver – nicht
                  auf den Servern von Google – eingebunden. Dadurch gibt es
                  keine Verbindung zu Server von Google und somit auch keine
                  Datenübertragung bzw. Speicherung. Was sind Google Fonts?
                  Google Fonts (früher Google Web Fonts) ist ein interaktives
                  Verzeichnis mit mehr als 800 Schriftarten, die die Google LLC
                  zur freien Verwendung bereitstellt. Mit Google Fonts könnte
                  man die Schriften nutzen, ohne sie auf den eigenen Server
                  hochzuladen. Doch um diesbezüglich jede
                  Informationsübertragung zum Google-Server zu unterbinden,
                  haben wir die Schriftarten auf unseren Server heruntergeladen.
                  Auf diese Weise handeln wir datenschutzkonform und senden
                  keine Daten an Google Fonts weiter. Anders als andere
                  Web-Schriften erlaubt uns Google uneingeschränkten Zugriff auf
                  alle Schriftarten. Wir können also unlimitiert auf ein Meer an
                  Schriftarten zugreifen und so das Optimum für unsere Webseite
                  rausholen. Mehr zu Google Fonts und weiteren Fragen finden Sie
                  auf https://developers.google.com/fonts/faq?tid=311136352.
                  Google Fonts Datenschutzerklärung Wir verwenden Google Fonts
                  der Firma Google Inc. (1600 Amphitheatre Parkway Mountain
                  View, CA 94043, USA) auf unserer Webseite. Für die Verwendung
                  von Google-Schriftarten müssen Sie sich nicht anmelden bzw.
                  ein Passwort hinterlegen. Weiters werden auch keine Cookies in
                  Ihrem Browser gespeichert. Die Dateien (CSS,
                  Schriftarten/Fonts) werden über die Google-Domains
                  fonts.googleapis.com und fonts.gstatic.com angefordert. Laut
                  Google sind die Anfragen nach CSS und Schriften vollkommen
                  getrennt von allen anderen Google-Diensten. Wenn Sie ein
                  Google-Konto haben, brauchen Sie keine Sorge haben, dass Ihre
                  Google-Kontodaten, während der Verwendung von Google Fonts, an
                  Google übermittelt werden. Google erfasst die Nutzung von CSS
                  (Cascading Style Sheets) und der verwendeten Schriftarten und
                  speichert diese Daten sicher. Wie die Datenspeicherung genau
                  aussieht, werden wir uns noch im Detail ansehen. Was sind
                  Google Fonts? Google Fonts (früher Google Web Fonts) ist ein
                  interaktives Verzeichnis mit mehr als 800 Schriftarten, die
                  die Google LLC zur freien Verwendung bereitstellt. Viele
                  dieser Schriftarten sind unter der SIL Open Font License
                  veröffentlicht, während andere unter der Apache-Lizenz
                  veröffentlicht wurden. Beides sind freie Software-Lizenzen.
                  Somit können wir sie frei verwenden, ohne dafür Lizenzgebühren
                  zu zahlen. Warum verwenden wir Google Fonts auf unserer
                  Webseite? Mit Google Fonts können wir auf der eigenen Webseite
                  Schriften nutzen, und müssen sie nicht auf unserem eigenen
                  Server hochladen. Google Fonts ist ein wichtiger Baustein, um
                  die Qualität unserer Webseite hoch zu halten. Alle
                  Google-Schriften sind automatisch für das Web optimiert und
                  dies spart Datenvolumen und ist speziell für die Verwendung
                  bei mobilen Endgeräten ein großer Vorteil. Wenn Sie unsere
                  Seite besuchen, sorgt die niedrige Dateigröße für eine
                  schnelle Ladezeit. Des Weiteren sind Google Fonts sogenannte
                  sichere Web Fonts. Unterschiedliche Bildsynthese-Systeme
                  (Rendering) in verschiedenen Browsern, Betriebssystemen und
                  mobilen Endgeräten können zu Fehlern führen. Solche Fehler
                  können teilweise Texte bzw. ganze Webseiten optisch verzerren.
                  Dank des schnellen Content Delivery Network (CDN) gibt es mit
                  Google Fonts keine plattformübergreifenden Probleme. Google
                  Fonts unterstützt alle gängigen Browser ( Google Chrome,
                  Mozilla Firefox, Apple Safari, Opera) und funktioniert
                  zuverlässig auf den meisten modernen mobilen Betriebssystemen,
                  einschließlich Android 2.2+ und iOS 4.2+ (iPhone, iPad, iPod).
                  Wir verwenden die Google Fonts also, damit wir unser gesamtes
                  Online-Service so schön und einheitlich wie möglich darstellen
                  können. Nach dem Art. 6 Abs. 1 f lit. F DSGVO stellt das
                  bereits ein „berechtigtes Interesse“ an der Verarbeitung von
                  personenbezogenen Daten dar. Unter „berechtigtem Interesse“
                  versteht man in diesem Fall sowohl rechtliche als auch
                  wirtschaftliche oder ideelle Interessen, die vom Rechtssystem
                  anerkannt werden. Welche Daten werden von Google gespeichert?
                  Wenn Sie unsere Webseite besuchen, werden die Schriften über
                  einen Google-Server nachgeladen. Durch diesen externen Aufruf
                  werden Daten an die Google-Server übermittelt. So erkennt
                  Google auch, dass Sie bzw. Ihre IP-Adresse unsere Webseite
                  besucht. Die Google Fonts API wurde entwickelt, um die
                  Erfassung, Speicherung und Verwendung von Endnutzerdaten auf
                  das zu reduzieren, was für eine effiziente Bereitstellung von
                  Schriften nötig ist. API steht übrigens für „Application
                  Programming Interface“ und dient unter anderem als
                  Datenübermittler im Softwarebereich. Google Fonts speichert
                  CSS- und Font-Anfragen sicher bei Google und ist somit
                  geschützt. Durch die gesammelten Nutzungszahlen kann Google
                  die Beliebtheit der Schriften feststellen. Die Ergebnisse
                  veröffentlicht Google auf internen Analyseseiten, wie
                  beispielsweise Google Analytics. Zudem verwendet Google auch
                  Daten des eigenen Web-Crawlers, um festzustellen, welche
                  Webseiten Google-Schriften verwenden. Diese Daten werden in
                  der BigQuery-Datenbank von Google Fonts veröffentlicht.
                  BigQuery ist ein Webservice von Google für Unternehmen, die
                  große Datenmengen bewegen und analysieren wollen. Zu bedenken
                  gilt allerdings noch, dass durch jede Google Font Anfrage auch
                  Informationen wie IP-Adresse, Spracheinstellungen,
                  Bildschirmauflösung des Browsers, Version des Browsers und
                  Name des Browsers automatisch an die Google-Server übertragen
                  werden. Ob diese Daten auch gespeichert werden, ist nicht klar
                  feststellbar bzw. wird von Google nicht eindeutig
                  kommuniziert. Wie lange und wo werden die Daten gespeichert?
                  Anfragen für CSS-Assets speichert Google einen Tag lang auf
                  Ihren Servern, die hauptsächlich außerhalb der EU angesiedelt
                  sind. Das ermöglicht uns, mithilfe eines Google-Stylesheets
                  die Schriftarten zu nutzen. Ein Stylesheet ist eine
                  Formatvorlage, über die man einfach und schnell z.B. das
                  Design bzw. die Schriftart einer Webseite ändern kann. Die
                  Font-Dateien werden bei Google ein Jahr gespeichert. Google
                  verfolgt damit das Ziel, die Ladezeit von Webseiten
                  grundsätzlich zu verbessern. Wenn Millionen von Webseiten auf
                  die gleichen Schriften verweisen, werden sie nach dem ersten
                  Besuch zwischengespeichert und erscheinen sofort auf allen
                  anderen später besuchten Webseiten wieder. Manchmal
                  aktualisiert Google Schriftdateien, um die Dateigröße zu
                  reduzieren, die Abdeckung von Sprache zu erhöhen und das
                  Design zu verbessern. Wie kann ich meine Daten löschen bzw.
                  die Datenspeicherung verhindern? Jene Daten, die Google für
                  einen Tag bzw. ein Jahr speichert können nicht einfach
                  gelöscht werden. Die Daten werden beim Seitenaufruf
                  automatisch an Google übermittelt. Um diese Daten vorzeitig
                  löschen zu können, müssen Sie den Google-Support auf
                  https://support.google.com/?hl=de&tid=311136352 kontaktieren.
                  Datenspeicherung verhindern Sie in diesem Fall nur, wenn Sie
                  unsere Seite nicht besuchen. Anders als andere Web-Schriften
                  erlaubt uns Google uneingeschränkten Zugriff auf alle
                  Schriftarten. Wir können also unlimitiert auf ein Meer an
                  Schriftarten zugreifen und so das Optimum für unsere Webseite
                  rausholen. Mehr zu Google Fonts und weiteren Fragen finden Sie
                  auf https://developers.google.com/fonts/faq?tid=311136352.
                  Dort geht zwar Google auf datenschutzrelevante Angelegenheiten
                  ein, doch wirklich detaillierte Informationen über
                  Datenspeicherung sind nicht enthalten. Es ist relativ
                  schwierig (beinahe unmöglich), von Google wirklich präzise
                  Informationen über gespeicherten Daten zu bekommen. Welche
                  Daten grundsätzlich von Google erfasst werden und wofür diese
                  Daten verwendet werden, können Sie auch auf
                  https://www.google.com/intl/de/
                  <br />
                  policies/privacy/ nachlesen.
                  Google Analytics Datenschutzerklärung Wir verwenden auf dieser
                  Website Google Analytics der Firma Google LLC (1600
                  Amphitheatre Parkway Mountain View, CA 94043, USA) um
                  Besucherdaten statistisch auszuwerten. Dabei verwendet Google
                  Analytics zielorientierte Cookies. Cookies von Google
                  Analytics _ga Ablaufzeit: 2 Jahre Verwendung: Unterscheidung
                  der Webseitenbesucher Beispielhafter Wert:
                  GA1.2.1326744211.152311136352 _gid Ablaufzeit: 24 Stunden
                  Verwendung: Unterscheidung der Webseitenbesucher
                  Beispielhafter Wert: GA1.2.1687193234.152311136352
                  _gat_gtag_UA_property-id Ablaufzeit: 1 Minute Verwendung: Wird
                  zum Drosseln der Anforderungsrate verwendet. Wenn Google
                  Analytics über den Google Tag Manager bereitgestellt wird,
                  erhält dieser Cookie den Namen _dc_gtm_ property-id.
                  Beispielhafter Wert: 1 Nähere Informationen zu
                  Nutzungsbedingungen und Datenschutz finden Sie unter
                  http://www.google.com/analytics/terms/de.html bzw. unter
                  https://support.google.com/analytics/answer/
                  <br />
                  6004245?hl=de.
                  Pseudonymisierung Unser Anliegen im Sinne der DSGVO ist die
                  Verbesserung unseres Angebotes und unseres Webauftritts. Da
                  uns die Privatsphäre unserer Nutzer wichtig ist, werden die
                  Nutzerdaten pseudonymisiert. Die Datenverarbeitung erfolgt auf
                  Basis der gesetzlichen Bestimmungen des Art 6 EU-DSGVO Abs 1
                  lit a (Einwilligung) und/oder f (berechtigtes Interesse) der
                  DSGVO. Deaktivierung der Datenerfassung durch Google Analytics
                  Mithilfe des Browser-Add-ons zur Deaktivierung von Google
                  Analytics-JavaScript (ga.js, analytics.js, dc.js) können
                  Website-Besucher verhindern, dass Google Analytics ihre Daten
                  verwendet. Sie können die Erfassung der durch das Cookie
                  erzeugten und auf Ihre Nutzung der Website bezogenen Daten an
                  Google sowie die Verarbeitung dieser Daten durch Google
                  verhindern, indem Sie das unter dem folgenden Link verfügbare
                  Browser-Plugin herunterladen und installieren:
                  https://tools.google.com/dlpage/gaoptout?hl=de Google
                  Analytics Deaktivierungslink Wenn Sie auf folgenden
                  Deaktivierungslink klicken, können Sie verhindern, dass Google
                  weitere Besuche auf dieser Webseite erfasst. Achtung: Das
                  Löschen von Cookies, die Nutzung des Inkognito/Privatmodus
                  ihres Browsers, oder die Nutzung eines anderen Browsers führt
                  dazu, dass wieder Daten erhoben werden.
                  [google_analytics_optout]Google Analytics
                  deaktivieren[/google_analytics_optout] Google Analytics
                  IP-Anonymisierung Wir haben auf dieser Webseite die
                  IP-Adressen-Anonymisierung von Google Analytics implementiert.
                  Diese Funktion wurde von Google entwickelt, damit diese
                  Webseite die geltenden Datenschutzbestimmungen und
                  Empfehlungen der lokalen Datenschutzbehörden einhalten kann,
                  wenn diese eine Speicherung der vollständigen IP-Adresse
                  untersagen. Die Anonymisierung bzw. Maskierung der IP findet
                  statt, sobald die IP-Adressen im Google
                  Analytics-Datenerfassungsnetzwerk eintreffen und bevor eine
                  Speicherung oder Verarbeitung der Daten stattfindet. Mehr
                  Informationen zur IP-Anonymisierung finden Sie auf
                  https://support.google.com/analytics/answer/
                  <br />
                  2763052?hl=de.
                  Google Analytics Berichte zu demografischen Merkmalen und
                  Interessen Wir haben in Google Analytics die Funktionen für
                  Werbeberichte eingeschaltet. Die Berichte zu demografischen
                  Merkmalen und Interessen enthalten Angaben zu Alter,
                  Geschlecht und Interessen. Damit können wir uns – ohne diese
                  Daten einzelnen Personen zuordnen zu können – ein besseres
                  Bild von unseren Nutzern machen. Mehr über die Werbefunktionen
                  erfahren Sie auf
                  https://support.google.com/analytics/answer/
                  <br />
                  3450482?hl=de_AT&utm_id=ad.
                  Sie können die Nutzung der Aktivitäten und Informationen Ihres
                  Google Kontos unter “Einstellungen für Werbung” auf
                  https://adssettings.google.com/authenticated per Checkbox
                  beenden. Google Analytics Zusatz zur Datenverarbeitung Wir
                  haben mit Google einen Direktkundenvertrag zur Verwendung von
                  Google Analytics abgeschlossen, indem wir den “Zusatz zur
                  Datenverarbeitung” in Google Analytics akzeptiert haben. Mehr
                  über den Zusatz zur Datenverarbeitung für Google Analytics
                  finden Sie hier:
                  https://support.google.com/analytics/answer/
                  <br />
                  3379636?hl=de&utm_id=ad
                  Google Maps Datenschutzerklärung Wir benützen auf unserer
                  Website Google Maps der Firma Google Inc. (1600 Amphitheatre
                  Parkway Mountain View, CA 94043, USA). Mit Google Maps können
                  wir Standorte visuell besser darstellen und damit unser
                  Service verbessern. Durch die Verwendung von Google Maps
                  werden Daten an Google übertragen und auf den Google-Servern
                  gespeichert. Hier wollen wir nun genauer darauf eingehen, was
                  Google Maps ist, warum wir diesen Google-Dienst in Anspruch
                  nehmen, welche Daten gespeichert werden und wie Sie dies
                  unterbinden können. Was ist Google Maps? Google Maps ist ein
                  Online-Kartendienst der Firma Google Inc. Mit Google Maps
                  können Sie im Internet über einen PC oder über eine App genaue
                  Standorte von Städten, Sehenswürdigkeiten, Unterkünften oder
                  Unternehmen suchen. Wenn Unternehmen auf Google My Business
                  vertreten sind, werden neben dem Standort noch weitere
                  Informationen über die Firma angezeigt. Um die
                  Anfahrtsmöglichkeit anzuzeigen, können Kartenausschnitte eines
                  Standorts per HTML-Code in eine Website eingebunden werden.
                  Google Maps zeigt die Erdoberfläche als Straßenkarte oder als
                  Luft- bzw. Satellitenbild an. Dank der Street View Bilder und
                  den qualitativ hochwertigen Satellitenbildern sind sehr genaue
                  Darstellungen möglich. Warum verwenden wir Google Maps auf
                  unserer Website? All unsere Bemühungen auf dieser Seite
                  verfolgen das Ziel, Ihnen eine nützliche und sinnvolle Zeit
                  auf unserer Website zu bieten. Durch die Einbindung von Google
                  Maps können wir Ihnen die wichtigsten Informationen zu
                  diversen Standorten liefern. Dank Google Maps sehen Sie auf
                  einen Blick wo wir unseren Firmensitz haben. Die
                  Wegbeschreibung zeigt Ihnen immer den besten bzw. schnellsten
                  Weg zu uns. Sie können den Anfahrtsweg für Routen mit dem
                  Auto, mit öffentlichen Verkehrsmitteln, zu Fuß oder mit dem
                  Fahrrad abrufen. Für uns ist die Bereitstellung von Google
                  Maps Teil unseres Kundenservice. Welche Daten werden von
                  Google Maps gespeichert? Damit Google Maps ihren Dienst
                  vollständig anbieten kann, muss das Unternehmen Daten von
                  Ihnen aufnehmen und speichern. Dazu zählen unter anderem die
                  eingegebenen Suchbegriffe, Ihre IP-Adresse und die Breiten-
                  bzw. Längenkoordinaten. Benutzen Sie die Routenplaner-Funktion
                  wird auch die eingegebene Startadresse gespeichert. Diese
                  Datenspeicherung passiert allerdings auf den Webseiten von
                  Google Maps. Wir können Sie darüber nur informieren, aber
                  keinen Einfluss nehmen. Da wir Google Maps in unsere Website
                  eingebunden haben, setzt Google mindestens ein Cookie (Name:
                  NID) in Ihrem Browser. Dieses Cookie speichert Daten über Ihr
                  Userverhalten. Google nutzt diese Daten in erster Linie, um
                  eigene Dienste zu optimieren und individuelle, personalisierte
                  Werbung für Sie bereitzustellen. Folgendes Cookie wird
                  aufgrund der Einbindung von Google Maps in Ihrem Browser
                  gesetzt: Name: NID Ablaufzeit: nach 6 Monaten Verwendung: NID
                  wird von Google verwendet, um Werbeanzeigen an Ihre
                  Google-Suche anzupassen. Mit Hilfe des Cookies „erinnert“ sich
                  Google an Ihre am häufigsten eingegebenen Suchanfragen oder
                  Ihre frühere Interaktion mit Anzeigen. So bekommen Sie immer
                  maßgeschneiderte Werbeanzeigen. Das Cookie enthält eine
                  einzigartige ID, die Google benutzt, persönliche Einstellungen
                  des Users für Werbezwecke zu sammeln. Beispielwert:
                  188=h26c1Ktha7fCQTx8rXgLyATyITJ311136352 Anmerkung: Wir können
                  bei den Angaben der gespeicherten Daten keine Vollständigkeit
                  gewährleisten. Speziell bei der Verwendung von Cookies sind
                  Veränderungen bei Google nie auszuschließen. Um das Cookie NID
                  zu identifizieren, wurde eine eigene Testseite angelegt, wo
                  ausschließlich Google Maps eingebunden war. Wie lange und wo
                  werden die Daten gespeichert? Die Google-Server stehen in
                  Rechenzentren auf der ganzen Welt. Die meisten Server befinden
                  sich allerdings in Amerika. Aus diesem Grund werden Ihre Daten
                  auch vermehrt in den USA gespeichert. Hier können Sie genau
                  nachlesen wo sich die Google-Rechenzentren befinden:
                  https://www.google.com/about/datacenters/
                  <br />
                  inside/locations/?hl=de
                  Die Daten verteilt Google auf verschiedenen Datenträgern.
                  Dadurch sind die Daten schneller abrufbar und werden vor
                  etwaigen Manipulationsversuchen besser geschützt. Jedes
                  Rechenzentrum hat auch spezielle Notfallprogramme. Wenn es zum
                  Beispiel Probleme bei der Google-Hardware gibt oder eine
                  Naturkatastrophe die Server beeinträchtigt, bleiben die Daten
                  mit hoher Wahrscheinlich dennoch geschützt. Manche Daten
                  speichert Google für einen festgelegten Zeitraum. Bei anderen
                  Daten bietet Google lediglich die Möglichkeit, diese manuell
                  zu löschen. Weiters anonymisiert das Unternehmen auch
                  Informationen (wie zum Beispiel Werbedaten) in
                  Serverprotokollen, indem sie einen Teil der IP-Adresse und
                  Cookie-Informationen nach 9 bzw.18 Monaten löschen. Wie kann
                  ich meine Daten löschen bzw. die Datenspeicherung verhindern?
                  Mit der 2019 eingeführten automatischen Löschfunktion von
                  Standort- und Aktivitätsdaten werden Informationen zur
                  Standortbestimmung und Web-/App-Aktivität – abhängig von Ihrer
                  Entscheidung – entweder 3 oder 18 Monate gespeichert und dann
                  gelöscht. Zudem kann man diese Daten über das Google-Konto
                  auch jederzeit manuell aus dem Verlauf löschen. Wenn Sie Ihre
                  Standorterfassung vollständig verhindern wollen, müssen Sie im
                  Google-Konto die Rubrik „Web- und App-Aktivität“ pausieren.
                  Klicken Sie „Daten und Personalisierung“ und dann auf die
                  Option „Aktivitätseinstellung“. Hier können Sie die
                  Aktivitäten ein- bzw. ausschalten. In Ihrem Browser können Sie
                  weiters auch einzelne Cookies deaktivieren, löschen oder
                  verwalten. Je nach dem welchen Browser Sie verwenden,
                  funktioniert dies auf unterschiedliche Art und Weise. Die
                  folgenden Anleitungen zeigen, wie Sie Cookies in Ihrem Browser
                  verwalten: Chrome: Cookies in Chrome löschen, aktivieren und
                  verwalten Safari: Verwalten von Cookies und Websitedaten mit
                  Safari Firefox: Cookies löschen, um Daten zu entfernen, die
                  Websites auf Ihrem Computer abgelegt haben Internet Explorer:
                  Löschen und Verwalten von Cookies Microsoft Edge: Löschen und
                  Verwalten von Cookies Falls Sie grundsätzlich keine Cookies
                  haben wollen, können Sie Ihren Browser so einrichten, dass er
                  Sie immer informiert, wenn ein Cookie gesetzt werden soll. So
                  können Sie bei jedem einzelnen Cookie entscheiden, ob Sie es
                  erlauben oder nicht. Google ist aktiver Teilnehmer beim
                  EU-U.S. Privacy Shield Framework, wodurch der korrekte und
                  sichere Datentransfer persönlicher Daten geregelt wird. Mehr
                  Informationen dazu finden Sie auf
                  https://www.privacyshield.gov/participant?id=a2zt0000000TO6hAAG.
                  Wenn Sie mehr über die Datenverarbeitung von Google erfahren
                  wollen, empfehlen wir Ihnen die hauseigene
                  Datenschutzerklärung des Unternehmens unter
                  https://policies.google.com/privacy?hl=de. Eingebettete Social
                  Media Elemente Datenschutzerklärung Wir binden auf unserer
                  Webseite Elemente von Social Media Diensten ein um Bilder,
                  Videos und Texte anzuzeigen. Durch den Besuch von Seiten die
                  diese Elemente darstellen, werden Daten von Ihrem Browser zum
                  jeweiligen Social Media Dienst übertragen und dort
                  gespeichert. Wir haben keinen Zugriff auf diese Daten. Die
                  folgenden Links führen Sie zu den Seiten der jeweiligen Social
                  Media Dienste wo erklärt wird, wie diese mit Ihren Daten
                  umgehen: Instagram-Datenschutzrichtlinie:
                  https://help.instagram.com/519522125107875 Für YouTube gilt
                  die Google Datenschutzerklärung:
                  https://policies.google.com/privacy?hl=de
                  Facebook-Datenrichtline:
                  https://www.facebook.com/about/privacy Twitter
                  Datenschutzrichtlinie: https://twitter.com/de/privacy Facebook
                  Datenschutzerklärung Wir verwenden auf unserer Webseite
                  ausgewählte Facebook Tools von Facebook. Facebook ist ein
                  Social Media Network des Unternehmens Facebook Ireland Ltd., 4
                  Grand Canal Square, Grand Canal Harbour, Dublin 2 Ireland.
                  Mithilfe dieser Tools können wir Ihnen und Menschen, die sich
                  für unsere Produkte und Dienstleistungen interessieren, das
                  bestmögliche Angebot bieten. Im Folgenden geben wir einen
                  Überblick über die verschiedenen Facebook Tools, welche Daten
                  an Facebook gesendet werden und wie Sie diese Daten löschen
                  können. Was sind Facebook-Tools? Neben vielen anderen
                  Produkten bietet Facebook auch die sogenannten “Facebook
                  Business Tools” an. Das ist die offizielle Bezeichnung von
                  Facebook. Da der Begriff aber kaum bekannt ist, haben wir uns
                  dafür entschieden, sie lediglich Facebook-Tools zu nennen.
                  Darunter finden sich unter anderem: Facebook-Pixel soziale
                  Plug-ins (wie z.B der „Gefällt mir“- oder „Teilen“-Button)
                  Facebook Login Account Kit APIs (Programmierschnittstelle)
                  SDKs (Sammlung von Programmierwerkzeugen)
                  Plattform-Integrationen Plugins Codes Spezifikationen
                  Dokumentationen Technologien und Dienstleistungen Durch diese
                  Tools erweitert Facebook Dienstleistungen und hat die
                  Möglichkeit, Informationen über User-Aktivitäten außerhalb von
                  Facebook zu erhalten. Warum verwenden wir Facebook-Tools auf
                  unserer Webseite? Wir wollen unsere Dienstleistungen und
                  Produkte nur Menschen zeigen, die sich auch wirklich dafür
                  interessieren. Mithilfe von Werbeanzeigen (Facebook-Ads)
                  können wir genau diese Menschen erreichen. Damit den Usern
                  passende Werbung gezeigt werden kann, benötigt Facebook
                  allerdings Informationen über die Wünsche und Bedürfnisse der
                  Menschen. So werden dem Unternehmen Informationen über das
                  Userverhalten (und Kontaktdaten) auf unserer Webseite zur
                  Verfügung gestellt. Dadurch sammelt Facebook bessere
                  User-Daten und kann interessierten Menschen die passende
                  Werbung über unsere Produkte bzw. Dienstleistungen anzeigen.
                  Die Tools ermöglichen somit maßgeschneiderte Werbekampagnen
                  auf Facebook. Daten über Ihr Verhalten auf unserer Webseite
                  nennt Facebook „Event-Daten“. Diese werden auch für Messungs-
                  und Analysedienste verwendet. Facebook kann so in unserem
                  Auftrag „Kampagnenberichte“ über die Wirkung unserer
                  Werbekampagnen erstellen. Weiters bekommen wir durch Analysen
                  einen besseren Einblick, wie Sie unsere Dienstleistungen,
                  Webseite oder Produkte verwenden. Dadurch optimieren wir mit
                  einigen dieser Tools Ihre Nutzererfahrung auf unserer
                  Webseite. Beispielsweise können Sie mit den sozialen Plug-ins
                  Inhalte auf unserer Seite direkt auf Facebook teilen. Welche
                  Daten werden von Facebook-Tools gespeichert? Durch die Nutzung
                  einzelner Facebook-Tools können personenbezogene Daten
                  (Kundendaten) an Facebook gesendet werden. Abhängig von den
                  benutzten Tools können Kundendaten wie Name, Adresse,
                  Telefonnummer und IP-Adresse versandt werden. Facebook
                  verwendet diese Informationen, um die Daten mit den ihren
                  eigenen Daten, die es von Ihnen hat (sofern Sie
                  Facebook-Mitglied sind) abzugleichen. Bevor Kundendaten an
                  Facebook übermittelt werden, erfolgt ein sogenanntes
                  „Hashing“. Das bedeutet, dass ein beliebig großer Datensatz in
                  eine Zeichenkette transformiert wird. Dies dient auch der
                  Verschlüsselung von Daten. Neben den Kontaktdaten werden auch
                  „Event-Daten“ übermittelt. Unter „Event-Daten“ sind jene
                  Informationen gemeint, die wir über Sie auf unserer Webseite
                  erhalten. Zum Beispiel, welche Unterseiten Sie besuchen oder
                  welche Produkte Sie bei uns kaufen. Facebook teilt die
                  erhaltenen Informationen nicht mit Drittanbietern (wie
                  beispielsweise Werbetreibende), außer das Unternehmen hat eine
                  explizite Genehmigung oder ist rechtlich dazu verpflichtet.
                  „Event-Daten“ können auch mit Kontaktdaten verbunden werden.
                  Dadurch kann Facebook bessere personalisierte Werbung
                  anbieten. Nach dem bereits erwähnten Abgleichungsprozess
                  löscht Facebook die Kontaktdaten wieder. Um Werbeanzeigen
                  optimiert ausliefern zu können, verwendet Facebook die
                  Event-Daten nur, wenn diese mit anderen Daten (die auf andere
                  Weise von Facebook erfasst wurden) zusammengefasst wurden.
                  Diese Event-Daten nützt Facebook auch für Sicherheits-,
                  Schutz-, Entwicklungs- und Forschungszwecken. Viele dieser
                  Daten werden über Cookies zu Facebook übertragen. Cookies sind
                  kleine Text-Dateien, die zum Speichern von Daten bzw.
                  Informationen in Browsern verwendet werden. Je nach
                  verwendeten Tools und abhängig, ob Sie Facebook-Mitglied sind,
                  werden unterschiedlich viele Cookies in Ihrem Browser
                  angelegt. In den Beschreibungen der einzelnen Facebook Tools
                  gehen wir näher auf einzelne Facebook-Cookies ein. Allgemeine
                  Informationen über die Verwendung von Facebook-Cookies
                  erfahren Sie auch auf
                  https://www.facebook.com/policies/cookies. Wie lange und wo
                  werden die Daten gespeichert? Grundsätzlich speichert Facebook
                  Daten bis sie nicht mehr für die eigenen Dienste und
                  Facebook-Produkte benötigt werden. Facebook hat auf der ganzen
                  Welt Server verteilt, wo Ihre Daten gespeichert werden.
                  Kundendaten werden allerdings, nachdem sie mit den eigenen
                  Userdaten abgeglichen wurden, innerhalb von 48 Stunden
                  gelöscht. Wie kann ich meine Daten löschen bzw. die
                  Datenspeicherung verhindern? Entsprechend der Datenschutz
                  Grundverordnung haben Sie das Recht auf Auskunft,
                  Berichtigung, Übertragbarkeit und Löschung Ihrer Daten. Eine
                  komplette Löschung der Daten erfolgt nur, wenn Sie Ihr
                  Facebook-Konto vollständig löschen. Und so funktioniert das
                  Löschen Ihres Facebook-Kontos: 1) Klicken Sie rechts bei
                  Facebook auf Einstellungen. 2) Anschließend klicken Sie in der
                  linken Spalte auf „Deine Facebook-Informationen“. 3) Nun
                  klicken Sie “Deaktivierung und Löschung”. 4) Wählen Sie jetzt
                  „Konto löschen“ und klicken Sie dann auf „Weiter und Konto
                  löschen“ 5) Geben Sie nun Ihr Passwort ein, klicken Sie auf
                  „Weiter“ und dann auf „Konto löschen“ Die Speicherung der
                  Daten, die Facebook über unsere Seite erhält, erfolgt unter
                  anderem über Cookies (z.B. bei sozialen Plugins). In Ihrem
                  Browser können Sie einzelne oder alle Cookies deaktivieren,
                  löschen oder verwalten. Je nach dem welchen Browser Sie
                  verwenden, funktioniert dies auf unterschiedliche Art und
                  Weise. Die folgenden Anleitungen zeigen, wie Sie Cookies in
                  Ihrem Browser verwalten: Chrome: Cookies in Chrome löschen,
                  aktivieren und verwalten Safari: Verwalten von Cookies und
                  Websitedaten mit Safari Firefox: Cookies löschen, um Daten zu
                  entfernen, die Websites auf Ihrem Computer abgelegt haben
                  Internet Explorer: Löschen und Verwalten von Cookies Microsoft
                  Edge: Löschen und Verwalten von Cookies Falls Sie
                  grundsätzlich keine Cookies haben wollen, können Sie Ihren
                  Browser so einrichten, dass er Sie immer informiert, wenn ein
                  Cookie gesetzt werden soll. So können Sie bei jedem einzelnen
                  Cookie entscheiden, ob Sie es erlauben oder nicht. Facebook
                  ist aktiver Teilnehmer beim EU-U.S. Privacy Shield Framework,
                  wodurch der korrekte und sichere Datentransfer persönlicher
                  Daten geregelt wird. Mehr Informationen dazu finden Sie auf
                  https://www.privacyshield.gov/participant?id=a2zt0000000TO6hAAG.
                  Wir hoffen wir haben Ihnen die wichtigsten Informationen über
                  die Nutzung und Datenverarbeitung durch die Facebook-Tools
                  nähergebracht. Wenn Sie mehr darüber erfahren wollen, wie
                  Facebook Ihre Daten verwendet, empfehlen wir Ihnen die
                  Datenrichtlinien auf
                  https://www.facebook.com/about/privacy/
                  <br />
                  update. Instagram
                  Datenschutzerklärung Wir haben auf unserer Webseite Funktionen
                  von Instagram eingebaut. Instagram ist eine Social Media
                  Plattform des Unternehmens Instagram LLC, 1601 Willow Rd,
                  Menlo Park CA 94025, USA. Instagram ist seit 2012 ein
                  Tochterunternehmen von Facebook Inc. und gehört zu den
                  Facebook-Produkten. Das Einbetten von Instagram-Inhalten auf
                  unserer Webseite nennt man Embedding. Dadurch können wir Ihnen
                  Inhalte wie Buttons, Fotos oder Videos von Instagram direkt
                  auf unserer Webseite zeigen. Wenn Sie Webseiten unserer
                  Webpräsenz aufrufen, die eine Instagram-Funktion integriert
                  haben, werden Daten an Instagram übermittelt, gespeichert und
                  verarbeitet. Instagram verwendet dieselben Systeme und
                  Technologien wie Facebook. Ihre Daten werden somit über alle
                  Facebook-Firmen hinweg verarbeitet. Im Folgenden wollen wir
                  Ihnen einen genaueren Einblick geben, warum Instagram Daten
                  sammelt, um welche Daten es sich handelt und wie Sie die
                  Datenverarbeitung weitgehend kontrollieren können. Da
                  Instagram zu Facebook Inc. gehört, beziehen wir unsere
                  Informationen einerseits von den Instagram-Richtlinien,
                  andererseits allerdings auch von den Facebook-Datenrichtlinien
                  selbst. Was ist Instagram? Instagram ist eines der
                  bekanntesten Social Media Netzwerken weltweit. Instagram
                  kombiniert die Vorteile eines Blogs mit den Vorteilen von
                  audiovisuellen Plattformen wie YouTube oder Vimeo. Sie können
                  auf „Insta“ (wie viele der User die Plattform salopp nennen)
                  Fotos und kurze Videos hochladen, mit verschiedenen Filtern
                  bearbeiten und auch in anderen sozialen Netzwerken verbreiten.
                  Und wenn Sie selbst nicht aktiv sein wollen, können Sie auch
                  nur anderen interessante Users folgen. Warum verwenden wir
                  Instagram auf unserer Webseite? Instagram ist jene Social
                  Media Plattform, die in den letzten Jahren so richtig durch
                  die Decke ging. Und natürlich haben auch wir auf diesen Boom
                  reagiert. Wir wollen, dass Sie sich auf unserer Webseite so
                  wohl wie möglich fühlen. Darum ist für uns eine
                  abwechslungsreiche Aufbereitung unserer Inhalte
                  selbstverständlich. Durch die eingebetteten
                  Instagram-Funktionen können wir unseren Content mit
                  hilfreichen, lustigen oder spannenden Inhalten aus der
                  Instagram-Welt bereichern. Da Instagram eine
                  Tochtergesellschaft von Facebook ist, können uns die erhobenen
                  Daten auch für personalisierte Werbung auf Facebook dienlich
                  sein. So bekommen unsere Werbeanzeigen nur Menschen, die sich
                  wirklich für unsere Produkte oder Dienstleistungen
                  interessieren. Instagram nützt die gesammelten Daten auch zu
                  Messungs- und Analysezwecken. Wir bekommen zusammengefasste
                  Statistiken und so mehr Einblick über Ihre Wünsche und
                  Interessen. Wichtig ist zu erwähnen, dass diese Berichte Sie
                  nicht persönlich identifizieren. Welche Daten werden von
                  Instagram gespeichert? Wenn Sie auf eine unserer Seiten
                  stoßen, die Instagram-Funktionen (wie Instagrambilder oder
                  Plug-ins) eingebaut haben, setzt sich Ihr Browser automatisch
                  mit den Servern von Instagram in Verbindung. Dabei werden
                  Daten an Instagram versandt, gespeichert und verarbeitet. Und
                  zwar unabhängig, ob Sie ein Instagram-Konto haben oder nicht.
                  Dazu zählen Informationen über unserer Webseite, über Ihren
                  Computer, über getätigte Käufe, über Werbeanzeigen, die Sie
                  sehen und wie Sie unser Angebot nutzen. Weiters werden auch
                  Datum und Uhrzeit Ihrer Interaktion mit Instagram gespeichert.
                  Wenn Sie ein Instagram-Konto haben bzw. eingeloggt sind,
                  speichert Instagram deutlich mehr Daten über Sie. Facebook
                  unterscheidet zwischen Kundendaten und Eventdaten. Wir gehen
                  davon aus, dass dies bei Instagram genau so der Fall ist.
                  Kundendaten sind zum Beispiel Name, Adresse, Telefonnummer und
                  IP-Adresse. Wichtig zu erwähnen ist, dass diese Kundendaten
                  erst an Instagram übermittelt werden, wenn Sie zuvor „gehasht“
                  wurden. Hashing meint, ein Datensatz wird in eine Zeichenkette
                  verwandelt. Dadurch kann man die Kontaktdaten verschlüsseln.
                  Zudem werden auch die oben genannten „Event-Daten“
                  übermittelt. Unter „Event-Daten“ versteht Facebook – und
                  folglich auch Instagram – Daten über Ihr Userverhalten. Es
                  kann auch vorkommen, dass Kontaktdaten mit Event-Daten
                  kombiniert werden. Die erhobenen Kontaktdaten werden mit den
                  Daten, die Instagram bereits von Ihnen hat abgeglichen. Über
                  kleine Text-Dateien (Cookies), die meist in Ihrem Browser
                  gesetzt werden, werden die gesammelten Daten an Facebook
                  übermittelt. Je nach verwendeten Instagram-Funktionen und ob
                  Sie selbst ein Instagram-Konto haben, werden unterschiedlich
                  viele Daten gespeichert. Wir gehen davon aus, dass bei
                  Instagram die Datenverarbeitung gleich funktioniert wie bei
                  Facebook. Das bedeutet: wenn Sie ein Instagram-Konto haben
                  oder www.instagram.com besucht haben, hat Instagram zumindest
                  ein Cookie gesetzt. Wenn das der Fall ist, sendet Ihr Browser
                  über das Cookie Infos an Instagram, sobald Sie mit einer
                  Instagram-Funktion in Berührung kommen. Spätestens nach 90
                  Tagen (nach Abgleichung) werden diese Daten wieder gelöscht
                  bzw. anonymisiert. Obwohl wir uns intensiv mit der
                  Datenverarbeitung von Instagram beschäftigt haben, können wir
                  nicht ganz genau sagen, welche Daten Instagram exakt sammelt
                  und speichert. Im Folgenden zeigen wir Ihnen Cookies, die in
                  Ihrem Browser mindestens gesetzt werden, wenn Sie auf eine
                  Instagram-Funktion (wie z.B. Button oder ein Insta-Bild)
                  klicken. Bei unserem Test gehen wir davon aus, dass Sie kein
                  Instagram-Konto haben. Wenn Sie bei Instagram eingeloggt sind,
                  werden natürlich deutlich mehr Cookies in Ihrem Browser
                  gesetzt. Diese Cookies wurden bei unserem Test verwendet:
                  Name: csrftoken Wert: “” Verwendungszweck: Dieses Cookie wird
                  mit hoher Wahrscheinlichkeit aus Sicherheitsgründen gesetzt,
                  um Fälschungen von Anfragen zu verhindern. Genauer konnten wir
                  das allerdings nicht in Erfahrung bringen. Ablaufdatum: nach
                  einem Jahr Name: mid Wert: “” Verwendungszweck: Instagram
                  setzt dieses Cookie, um die eigenen Dienstleistungen und
                  Angebote in und außerhalb von Instagram zu optimieren. Das
                  Cookie legt eine eindeutige User-ID fest. Ablaufdatum: nach
                  Ende der Sitzung Name: fbsr_311136352124024 Wert: keine
                  Angaben Verwendungszweck: Dieses Cookie speichert die
                  Log-in-Anfrage für User der Instagram-App. Ablaufdatum: nach
                  Ende der Sitzung Name: rur Wert: ATN Verwendungszweck: Dabei
                  handelt es sich um ein Instagram-Cookie, das die
                  Funktionalität auf Instagram gewährleistet. Ablaufdatum: nach
                  Ende der Sitzung Name: urlgen Wert: “\”194.96.75.33\”:
                  1901:1iEtYv:Y833k2_UjKvXgYe311136352” Verwendungszweck: Dieses
                  Cookie dient den Marketingzwecken von Instagram. Ablaufdatum:
                  nach Ende der Sitzung Anmerkung: Wir können hier keinen
                  Vollständigkeitsanspruch erheben. Welche Cookies im
                  individuellen Fall gesetzt werden, hängt von den eingebetteten
                  Funktionen und Ihrer Verwendung von Instagram ab. Wie lange
                  und wo werden die Daten gespeichert? Instagram teilt die
                  erhaltenen Informationen zwischen den Facebook-Unternehmen mit
                  externen Partnern und mit Personen, mit denen Sie sich
                  weltweit verbinden. Die Datenverarbeitung erfolgt unter
                  Einhaltung der eigenen Datenrichtlinie. Ihre Daten sind, unter
                  anderem aus Sicherheitsgründen, auf den Facebook-Servern auf
                  der ganzen Welt verteilt. Die meisten dieser Server stehen in
                  den USA. Wie kann ich meine Daten löschen bzw. die
                  Datenspeicherung verhindern? Dank der Datenschutz
                  Grundverordnung haben Sie das Recht auf Auskunft,
                  Übertragbarkeit, Berichtigung und Löschung Ihrer Daten. In den
                  Instagram-Einstellungen können Sie Ihre Daten verwalten. Wenn
                  Sie Ihre Daten auf Instagram völlig löschen wollen, müssen Sie
                  Ihr Instagram-Konto dauerhaft löschen. Und so funktioniert die
                  Löschung des Instagram-Kontos: Öffnen Sie zuerst die
                  Instagram-App. Auf Ihrer Profilseite gehen Sie nach unten und
                  klicken Sie auf „Hilfebereich“. Jetzt kommen Sie auf die
                  Webseite des Unternehmens. Klicken Sie auf der Webseite auf
                  „Verwalten des Kontos“ und dann auf „Dein Konto löschen“. Wenn
                  Sie Ihr Konto ganz löschen, löscht Instagram Posts wie
                  beispielsweise Ihre Fotos und Status-Updates. Informationen,
                  die andere Personen über Sie geteilt haben, gehören nicht zu
                  Ihrem Konto und werden folglich nicht gelöscht. Wie bereits
                  oben erwähnt, speichert Instagram Ihre Daten in erster Linie
                  über Cookies. Diese Cookies können Sie in Ihrem Browser
                  verwalten, deaktivieren oder löschen. Abhängig von Ihrem
                  Browser funktioniert die Verwaltung immer ein bisschen anders.
                  Hier zeigen wir Ihnen die Anleitungen der wichtigsten Browser.
                  Chrome: Cookies in Chrome löschen, aktivieren und verwalten
                  Safari: Verwalten von Cookies und Websitedaten mit Safari
                  Firefox: Cookies löschen, um Daten zu entfernen, die Websites
                  auf Ihrem Computer abgelegt haben Internet Explorer: Löschen
                  und Verwalten von Cookies Microsoft Edge: Löschen und
                  Verwalten von Cookies Sie können auch grundsätzlich Ihren
                  Browser so einrichten, dass Sie immer informiert werden, wenn
                  ein Cookie gesetzt werden soll. Dann können Sie immer
                  individuell entscheiden, ob Sie das Cookie zulassen wollen
                  oder nicht. Instagram ist ein Tochterunternehmen von Facebook
                  Inc. und Facebook ist aktiver Teilnehmer beim EU-U.S. Privacy
                  Shield Framework. Dieses Framework stellt eine korrekte
                  Datenübertragung zwischen den USA und der Europäischen Union
                  sicher. Unter
                  https://www.privacyshield.gov/participant?id=a2zt0000000TO6hAAG
                  erfahren Sie mehr darüber. Wir haben versucht, Ihnen die
                  wichtigsten Informationen über die Datenverarbeitung durch
                  Instagram näherzubringen. Auf
                  https://help.instagram.com/519522125107875 können Sie sich
                  noch näher mit den Datenrichtlinien von Instagram
                  auseinandersetzen. YouTube Datenschutzerklärung Wir haben auf
                  unserer Webseite YouTube-Videos eingebaut. So können wir Ihnen
                  interessante Videos direkt auf unserer Seite präsentieren.
                  YouTube ist ein Videoportal, das seit 2006 eine Tochterfirma
                  von Google LLC ist. Betrieben wird das Videoportal durch
                  YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA. Wenn
                  Sie auf unserer Webseite eine Seite aufrufen, die ein
                  YouTube-Video eingebettet hat, verbindet sich Ihr Browser
                  automatisch mit den Servern von YouTube bzw. Google. Dabei
                  werden (je nach Einstellungen) verschiedene Daten übertragen.
                  Für die gesamte Datenverarbeitung ist Google verantwortlich
                  und es gilt somit auch der Datenschutz von Google. Im
                  Folgenden wollen wir Ihnen genauer erklären, welche Daten
                  verarbeitet werden, warum wir YouTube-Videos eingebunden haben
                  und wie Sie Ihre Daten verwalten oder löschen können. Was ist
                  YouTube? Auf YouTube können die User kostenlos Videos ansehen,
                  bewerten, kommentieren und selbst hochladen. Über die letzten
                  Jahre wurde YouTube zu einem der wichtigsten
                  Social-Media-Kanäle weltweit. Damit wir Videos auf unserer
                  Webseite anzeigen können, stellt YouTube einen Codeausschnitt
                  zur Verfügung, den wir auf unserer Seite eingebaut haben.
                  Warum verwenden wir YouTube-Videos auf unserer Webseite?
                  YouTube ist die Videoplattform mit den meisten Besuchern und
                  dem besten Content. Wir sind bemüht, Ihnen die bestmögliche
                  User-Erfahrung auf unserer Webseite zu bieten. Und natürlich
                  dürfen interessante Videos dabei nicht fehlen. Mithilfe
                  unserer eingebetteten Videos stellen wir Ihnen neben unseren
                  Texten und Bildern weiteren hilfreichen Content zur Verfügung.
                  Zudem wird unsere Webseite auf der Google-Suchmaschine durch
                  die eingebetteten Videos leichter gefunden. Auch wenn wir über
                  Google Ads Werbeanzeigen schalten, kann Google – dank der
                  gesammelten Daten – diese Anzeigen wirklich nur Menschen
                  zeigen, die sich für unsere Angebote interessieren. Welche
                  Daten werden von YouTube gespeichert? Sobald Sie eine unserer
                  Seiten besuchen, die ein YouTube-Video eingebaut hat, setzt
                  YouTube zumindest ein Cookie, das Ihre IP-Adresse und unsere
                  URL speichert. Wenn Sie in Ihrem YouTube-Konto eingeloggt
                  sind, kann YouTube Ihre Interaktionen auf unserer Webseite
                  meist mithilfe von Cookies Ihrem Profil zuordnen. Dazu zählen
                  Daten wie Sitzungsdauer, Absprungrate, ungefährer Standort,
                  technische Informationen wie Browsertyp, Bildschirmauflösung
                  oder Ihr Internetanbieter. Weitere Daten können Kontaktdaten,
                  etwaige Bewertungen, das Teilen von Inhalten über Social Media
                  oder das Hinzufügen zu Ihren Favoriten auf YouTube sein. Wenn
                  Sie nicht in einem Google-Konto oder einem Youtube-Konto
                  angemeldet sind, speichert Google Daten mit einer eindeutigen
                  Kennung, die mit Ihrem Gerät, Browser oder App verknüpft sind.
                  So bleibt beispielsweise Ihre bevorzugte Spracheinstellung
                  beibehalten. Aber viele Interaktionsdaten können nicht
                  gespeichert werden, da weniger Cookies gesetzt werden. In der
                  folgenden Liste zeigen wir Cookies, die in einem Test im
                  Browser gesetzt wurden. Wir zeigen einerseits Cookies, die
                  ohne angemeldeten YouTube-Konto gesetzt werden. Andererseits
                  zeigen wir Cookies, die mit angemeldetem Account gesetzt
                  werden. Die Liste kann keinen Vollständigkeitsanspruch
                  erheben, weil die Userdaten immer von den Interaktionen auf
                  YouTube abhängen. Name: YSC Wert: b9-CV6ojI5Y
                  Verwendungszweck: Dieses Cookie registriert eine eindeutige
                  ID, um Statistiken des gesehenen Videos zu speichern.
                  Ablaufdatum: nach Sitzungsende Name: PREF Wert: f1=50000000
                  Verwendungszweck: Dieses Cookie registriert ebenfalls Ihre
                  eindeutige ID. Google bekommt über PREF Statistiken, wie Sie
                  YouTube-Videos auf unserer Webseite verwenden. Ablaufdatum:
                  nach 8 Monate Name: GPS Wert: 1 Verwendungszweck: Dieses
                  Cookie registriert Ihre eindeutige ID auf mobilen Geräten, um
                  den GPS-Standort zu tracken. Ablaufdatum: nach 30 Minuten
                  Name: VISITOR_INFO1_LIVE Wert: 95Chz8bagyU Verwendungszweck:
                  Dieses Cookie versucht die Bandbreite des Users auf unseren
                  Webseiten (mit eingebautem YouTube-Video) zu schätzen.
                  Ablaufdatum: nach 8 Monaten Weitere Cookies, die gesetzt
                  werden, wenn Sie mit Ihrem YouTube-Konto angemeldet sind:
                  Name: APISID Wert: zILlvClZSkqGsSwI/AU1aZI6HY7311136352-
                  Verwendungszweck: Dieses Cookie wird verwendet, um ein Profil
                  über Ihre Interessen zu erstellen. Genützt werden die Daten
                  für personalisierte Werbeanzeigen. Ablaufdatum: nach 2 Jahre
                  Name: CONSENT Wert: YES+AT.de+20150628-20-0 Verwendungszweck:
                  Das Cookie speichert den Status der Zustimmung eines Users zur
                  Nutzung unterschiedlicher Services von Google. CONSENT dient
                  auch der Sicherheit, um User zu überprüfen und Userdaten vor
                  unbefugten Angriffen zu schützen. Ablaufdatum: nach 19 Jahren
                  Name: HSID Wert: AcRwpgUik9Dveht0I Verwendungszweck: Dieses
                  Cookie wird verwendet, um ein Profil über Ihre Interessen zu
                  erstellen. Diese Daten helfen personalisierte Werbung anzeigen
                  zu können. Ablaufdatum: nach 2 Jahren Name: LOGIN_INFO Wert:
                  AFmmF2swRQIhALl6aL… Verwendungszweck: In diesem Cookie werden
                  Informationen über Ihre Login-Daten gespeichert. Ablaufdatum:
                  nach 2 Jahren Name: SAPISID Wert:
                  7oaPxoG-pZsJuuF5/AnUdDUIsJ9iJz2vdM Verwendungszweck: Dieses
                  Cookie funktioniert, indem es Ihren Browser und Ihr Gerät
                  eindeutig identifiziert. Es wird verwendet, um ein Profil über
                  Ihre Interessen zu erstellen. Ablaufdatum: nach 2 Jahren Name:
                  SID Wert: oQfNKjAsI311136352- Verwendungszweck: Dieses Cookie
                  speichert Ihre Google-Konto-ID und Ihren letzten
                  Anmeldezeitpunkt in digital signierter und verschlüsselter
                  Form. Ablaufdatum: nach 2 Jahren Name: SIDCC Wert:
                  AN0-TYuqub2JOcDTyL Verwendungszweck: Dieses Cookie speichert
                  Informationen, wie Sie die Webseite nutzen und welche Werbung
                  Sie vor dem Besuch auf unserer Seite möglicherweise gesehen
                  haben. Ablaufdatum: nach 3 Monaten Wie lange und wo werden die
                  Daten gespeichert? Die Daten, die YouTube von Ihnen erhält und
                  verarbeitet werden auf den Google-Servern gespeichert. Die
                  meisten dieser Server befinden sich in Amerika. Unter
                  https://www.google.com/about/datacenters/
                  <br />
                  inside/locations/?hl=de
                  sehen Sie genau wo sich die Google-Rechenzentren befinden.
                  Ihre Daten sind auf den Servern verteilt. So sind die Daten
                  schneller abrufbar und vor Manipulation besser geschützt. Die
                  erhobenen Daten speichert Google unterschiedlich lang. Manche
                  Daten können Sie jederzeit löschen, andere werden automatisch
                  nach einer begrenzten Zeit gelöscht und wieder andere werden
                  von Google über längere Zeit gespeichert. Einige Daten (wie
                  Elemente aus „Meine Aktivität“, Fotos oder Dokumente,
                  Produkte), die in Ihrem Google-Konto gespeichert sind, bleiben
                  so lange gespeichert, bis Sie sie löschen. Auch wenn Sie nicht
                  in einem Google-Konto angemeldet sind, können Sie einige
                  Daten, die mit Ihrem Gerät, Browser oder App verknüpft sind,
                  löschen. Wie kann ich meine Daten löschen bzw. die
                  Datenspeicherung verhindern? Grundsätzlich können Sie Daten im
                  Google Konto manuell löschen. Mit der 2019 eingeführten
                  automatische Löschfunktion von Standort- und Aktivitätsdaten
                  werden Informationen abhängig von Ihrer Entscheidung –
                  entweder 3 oder 18 Monate gespeichert und dann gelöscht.
                  Unabhängig, ob Sie ein Google-Konto haben oder nicht, können
                  Sie Ihren Browser so konfigurieren, dass Cookies von Google
                  gelöscht bzw. deaktiviert werden. Je nach dem welchen Browser
                  Sie verwenden, funktioniert dies auf unterschiedliche Art und
                  Weise. Die folgenden Anleitungen zeigen, wie Sie Cookies in
                  Ihrem Browser verwalten: Chrome: Cookies in Chrome löschen,
                  aktivieren und verwalten Safari: Verwalten von Cookies und
                  Websitedaten mit Safari Firefox: Cookies löschen, um Daten zu
                  entfernen, die Websites auf Ihrem Computer abgelegt haben
                  Internet Explorer: Löschen und Verwalten von Cookies Microsoft
                  Edge: Löschen und Verwalten von Cookies Falls Sie
                  grundsätzlich keine Cookies haben wollen, können Sie Ihren
                  Browser so einrichten, dass er Sie immer informiert, wenn ein
                  Cookie gesetzt werden soll. So können Sie bei jedem einzelnen
                  Cookie entscheiden, ob Sie es erlauben oder nicht. Da YouTube
                  ein Tochterunternehmen von Google ist, gibt es eine gemeinsame
                  Datenschutzerklärung. Wenn Sie mehr über den Umgang mit Ihren
                  Daten erfahren wollen, empfehlen wir Ihnen die
                  Datenschutzerklärung unter
                  https://policies.google.com/privacy?hl=de. YouTube Abonnieren
                  Button Datenschutzerklärung Wir haben auf unserer Webseite den
                  YouTube Abonnieren Button (engl. „Subscribe-Button“)
                  eingebaut. Sie erkennen den Button meist am klassischen
                  YouTube-Logo. Das Logo zeigt vor rotem Hintergrund in weißer
                  Schrift die Wörter „Abonnieren“ oder „YouTube“ und links davon
                  das weiße „Play-Symbol“. Der Button kann aber auch in einem
                  anderen Design dargestellt sein. Unser YouTube-Kanal bietet
                  Ihnen immer wieder lustige, interessante oder spannende
                  Videos. Mit dem eingebauten „Abonnieren-Button“ können Sie
                  unseren Kanal direkt von unserer Webseite aus abonnieren und
                  müssen nicht eigens die YouTube-Webseite aufrufen. Wir wollen
                  Ihnen somit den Zugang zu unserem umfassenden Content so
                  einfach wie möglich machen. Bitte beachten Sie, dass YouTube
                  dadurch Daten von Ihnen speichern und verarbeiten kann. Wenn
                  Sie auf unserer Seite einen eingebauten Abo-Button sehen,
                  setzt YouTube – laut Google – mindestens ein Cookie. Dieses
                  Cookie speichert Ihre IP-Adresse und unsere URL. Auch
                  Informationen über Ihren Browser, Ihren ungefähren Standort
                  und Ihre voreingestellte Sprache kann YouTube so erfahren. Bei
                  unserem Test wurden folgende vier Cookies gesetzt, ohne bei
                  YouTube angemeldet zu sein: Name: YSC Wert:
                  b9-CV6ojI5311136352Y Verwendungszweck: Dieses Cookie
                  registriert eine eindeutige ID, um Statistiken des gesehenen
                  Videos zu speichern. Ablaufdatum: nach Sitzungsende Name: PREF
                  Wert: f1=50000000 Verwendungszweck: Dieses Cookie registriert
                  ebenfalls Ihre eindeutige ID. Google bekommt über PREF
                  Statistiken, wie Sie YouTube-Videos auf unserer Webseite
                  verwenden. Ablaufdatum: nach 8 Monate Name: GPS Wert: 1
                  Verwendungszweck: Dieses Cookie registriert Ihre eindeutige ID
                  auf mobilen Geräten, um den GPS-Standort zu tracken.
                  Ablaufdatum: nach 30 Minuten Name: VISITOR_INFO1_LIVE Wert:
                  31113635295Chz8bagyU Verwendungszweck: Dieses Cookie versucht
                  die Bandbreite des Users auf unseren Webseiten (mit
                  eingebautem YouTube-Video) zu schätzen. Ablaufdatum: nach 8
                  Monaten Anmerkung: Diese Cookies wurden nach einem Test
                  gesetzt und können nicht den Anspruch auf Vollständigkeit
                  erheben. Wenn Sie in Ihrem YouTube-Konto angemeldet sind, kann
                  YouTube viele Ihrer Handlungen/Interaktionen auf unserer
                  Webseite mit Hilfe von Cookies speichern und Ihrem
                  YouTube-Konto zuordnen. YouTube bekommt dadurch zum Beispiel
                  Informationen wie lange Sie auf unserer Seite surfen, welchen
                  Browsertyp Sie verwenden, welche Bildschirmauflösung Sie
                  bevorzugen oder welche Handlungen Sie ausführen. YouTube
                  verwendet diese Daten zum einen um die eigenen
                  Dienstleistungen und Angebote zu verbessern, zum anderen um
                  Analysen und Statistiken für Werbetreibende (die Google Ads
                  verwenden) bereitzustellen. Twitter Datenschutzerklärung Auf
                  unserer Webseite haben wir Funktionen von Twitter eingebaut.
                  Dabei handelt es sich zum Beispiel um eingebettete Tweets,
                  Timelines, Buttons oder Hashtags. Twitter ist ein
                  Kurznachrichtendienst und eine Social-Media-Plattform der
                  Firma Twitter Inc., One Cumberland Place, Fenian Street,
                  Dublin 2 D02 AX07, Irland. Nach unserer Kenntnis werden im
                  Europäischen Wirtschaftsraum und in der Schweiz durch das
                  bloße Einbinden von Twitter-Funktion noch keine
                  personenbezogenen Daten oder Daten zu Ihrer Webaktivitäten an
                  Twitter übertragen. Erst wenn Sie mit den Twitter-Funktionen
                  interagieren, wie zum Beispiel auf einen Button klicken,
                  können Daten an Twitter gesendet, dort gespeichert und
                  verarbeitet werden. Auf diese Datenverarbeitung haben wir
                  keinen Einfluss und tragen keine Verantwortung. Im Rahmen
                  dieser Datenschutzerklärung wollen wir Ihnen einen Überblick
                  geben, welche Daten Twitter speichert, was Twitter mit diesen
                  Daten macht und wie Sie sich vor der Datenübertragung
                  weitgehend schützen können. Was ist Twitter? Für die einen ist
                  Twitter ein Nachrichtendienst, für andere eine
                  Social-Media-Plattform und wieder andere sprechen von einem
                  Microblogging-Dienst. All diese Bezeichnungen haben ihre
                  Berechtigung und meinen mehr oder weniger dasselbe. Sowohl
                  Privatpersonen als auch Unternehmen nützen Twitter, um mit
                  interessierten Personen über Kurznachrichten zu kommunizieren.
                  Pro Nachricht erlaubt Twitter nur 280 Zeichen. Diese
                  Nachrichten werden „Tweets“ genannt. Anders als beispielsweise
                  bei Facebook fokussiert sich der Dienst nicht auf den Ausbau
                  eines Netzwerks für “Freunde”, sondern will als weltweite und
                  offene Nachrichten-Plattform verstanden werden. Bei Twitter
                  kann man auch ein anonymes Konto führen und Tweets können
                  einerseits vom Unternehmen, andererseits von den Usern selbst
                  gelöscht werden. Warum verwenden wir Twitter auf unserer
                  Webseite? Wie viele andere Webseiten und Unternehmen versuchen
                  wir unserer Services und Dienstleistungen über verschiedene
                  Kanäle anzubieten und mit unseren Kunden zu kommunizieren.
                  Speziell Twitter ist uns als nützlicher „kleiner“
                  Nachrichtendienst ans Herz gewachsen. Immer wieder tweeten
                  oder retweeten wir spannende, lustige oder interessante
                  Inhalte. Uns ist klar, dass Sie nicht jeden Kanal extra folgen
                  können. Schließlich haben Sie auch noch etwas anderes zu tun.
                  Darum haben wir auf unserer Webseite auch Twitter-Funktionen
                  eingebunden. Sie können unsere Twitter-Aktivität „vor Ort“
                  miterleben oder über einen direkten Link zu unserer
                  Twitter-Seite kommen. Durch die Einbindung wollen wir unser
                  Service und die Nutzerfreundlichkeit auf unserer Webseite
                  stärken. Welche Daten werden von Twitter gespeichert? Auf
                  manchen unserer Unterseiten finden Sie die eingebauten
                  Twitter-Funktionen. Wenn Sie mit den Twitter-Inhalten
                  interagieren, wie zum Beispiel auf einen Button klicken, kann
                  Twitter Daten erfassen und speichern. Und zwar auch dann, wenn
                  Sie selbst kein Twitter-Konto haben. Twitter nennt diese Daten
                  “Log-Daten”. Dazu zählen demografische Daten,
                  Browser-Cookie-IDs, die ID Ihres Smartphones, gehashte
                  E-Mail-Adressen, und Informationen, welche Seiten Sie bei
                  Twitter besucht haben und welche Handlungen Sie ausgeführt
                  haben. Twitter speichert natürlich mehr Daten, wenn Sie ein
                  Twitter-Konto haben und angemeldet sind. Meistens passiert
                  diese Speicherung über Cookies. Cookies sind kleine
                  Text-Dateien, die meist in Ihrem Browser gesetzt werden und
                  unterschiedliche Information an Twitter übermitteln. Welche
                  Cookies gesetzt werden, wenn Sie nicht bei Twitter angemeldet
                  sind, aber eine Webseite mit eingebauten Twitter-Funktionen
                  besuchen, zeigen wir Ihnen jetzt. Bitte betrachten Sie diese
                  Aufzählung als Beispiel. Einen Anspruch auf Vollständigkeit
                  können wir hier auf keinen Fall gewährleisten, da sich die
                  Wahl der Cookies stets verändert und von Ihren individuellen
                  Handlungen mit den Twitter-Inhalten abhängt. Diese Cookies
                  wurden bei unserem Test verwendet: Name: personalization_id
                  Wert: “v1_cSJIsogU51SeE311136352” Verwendungszweck: Dieses
                  Cookie speichert Informationen, wie Sie die Webseite nutzen
                  und über welche Werbung Sie möglicherweise zu Twitter gekommen
                  sind. Ablaufdatum: nach 2 Jahre Name: lang Wert: de
                  Verwendungszweck: Dieses Cookie speichert Ihre voreingestellte
                  bzw. bevorzugte Sprache. Ablaufdatum: nach Sitzungsende Name:
                  guest_id Wert: 311136352v1%3A157132626 Verwendungszweck:
                  Dieses Cookie wird gesetzt, um Sie als Gast zu identifizieren.
                  Ablaufdatum: nach 2 Jahren Name: fm Wert: 0 Verwendungszweck:
                  Zu diesem Cookie konnten wir leider den Verwendungszweck nicht
                  in Erfahrung bringen. Ablaufdatum: nach Sitzungsende Name:
                  external_referer Wert: 3111363522beTA0sf5lkMrlGt
                  Verwendungszweck: Dieses Cookie sammelt anonyme Daten, wie zum
                  Beispiel wie oft Sie Twitter besuchen und wie lange Sie
                  Twitter besuchen. Ablaufdatum: Nach 6 Tage Name: eu_cn Wert: 1
                  Verwendungszweck: Dieses Cookie speichert Useraktivität und
                  dient diversen Werbezwecken von Twitter. Ablaufdatum: Nach
                  einem Jahr Name: ct0 Wert: c1179f07163a365d2ed7aad84c99d966
                  Verwendungszweck: Zu diesem Cookie haben wir leider keine
                  Informationen gefunden. Ablaufdatum: nach 6 Stunden Name:
                  _twitter_sess Wert: 53D%253D–dd0248311136352-
                  Verwendungszweck: Mit diesem Cookie können Sie Funktionen
                  innerhalb der Twitter-Webseite nutzen. Ablaufdatum: nach
                  Sitzungsende Anmerkung: Twitter arbeitet auch mit
                  Drittanbietern zusammen. Darum haben wir bei unsrem Test auch
                  die drei Google-Analytics-Cookies _ga, _gat, _gid erkannt.
                  Twitter verwendet die erhobenen Daten einerseits, um das
                  Userverhalten besser zu verstehen und somit Ihre eigenen
                  Dienste und Werbeangebote zu verbessern, andererseits dienen
                  die Daten auch internen Sicherheitsmaßnahmen. Wie lange und wo
                  werden die Daten gespeichert? Wenn Twitter Daten von anderen
                  Webseiten erhebt, werden diese nach maximal 30 Tagen gelöscht,
                  zusammengefasst oder auf andere Weise verdeckt. Die
                  Twitter-Server liegen auf verschiedenen Serverzentren in den
                  Vereinigten Staaten. Demnach ist davon auszugehen, dass
                  erhobenen Daten in Amerika gesammelt und gespeichert werden.
                  Nach unserer Recherche konnten wir nicht eindeutig
                  feststellen, ob Twitter auch eigene Server in Europa hat.
                  Grundsätzlich kann Twitter die erhobenen Daten speichern, bis
                  sie dem Unternehmen nicht mehr dienlich sind, Sie die Daten
                  löschen oder eine gesetzliche Löschfrist besteht. Wie kann ich
                  meine Daten löschen bzw. die Datenspeicherung verhindern?
                  Twitter betont in Ihren Datenschutzrichtlinien immer wieder,
                  dass sie keine Daten von externen Webseitenbesuchen speichert,
                  wenn Sie bzw. Ihr Browser sich im europäischen Wirtschaftsraum
                  oder in der Schweiz befinden. Falls Sie allerdings mit Twitter
                  direkt interagieren, speichert Twitter selbstverständlich auch
                  Daten von Ihnen. Wenn Sie ein Twitter-Konto besitzen, können
                  Sie Ihre Daten verwalten, indem Sie unter dem „Profil“-Button
                  auf „Mehr“ klicken. Anschließend klicken Sie auf
                  „Einstellungen und Datenschutz“. Hier können Sie die
                  Datenverarbeitung individuell verwalten. Wenn Sie kein
                  Twitter-Konto besitzen, können Sie auf twitter.com gehen und
                  dann auf „Individualisierung“ klicken. Unter dem Punkt
                  „Individualisierung und Daten“ können Sie Ihre erhobenen Daten
                  verwalten. Die meisten Daten werden, wie oben bereits erwähnt,
                  über Cookies gespeichert und die können Sie in Ihrem Browser
                  verwalten, deaktivieren oder löschen. Bitte beachten Sie, dass
                  Sie die Cookies nur in dem von Ihnen gewählten Browser
                  “bearbeiten”. Das heißt: verwenden Sie in Zukunft einen
                  anderen Browser, müssen Sie dort Ihre Cookies erneut nach
                  Ihren Wünschen verwalten. Hier gibt es die Anleitung zur
                  Cookie-Verwaltung der bekanntesten Browser. Chrome: Cookies in
                  Chrome löschen, aktivieren und verwalten Safari: Verwalten von
                  Cookies und Websitedaten mit Safari Firefox: Cookies löschen,
                  um Daten zu entfernen, die Websites auf Ihrem Computer
                  abgelegt haben Internet Explorer: Löschen und Verwalten von
                  Cookies Microsoft Edge: Löschen und Verwalten von Cookies
                  Ihren Browser können Sie auch so verwalten, dass Sie bei jedem
                  einzelnen Cookie informiert werden. Dann können Sie immer
                  individuell entscheiden, ob Sie ein Cookie zulassen oder
                  nicht. Twitter verwendet die Daten auch für personalisierte
                  Werbung in- und außerhalb von Twitter. In den Einstellungen
                  können Sie unter „Individualisierung und Daten“ die
                  personalisierte Werbung abschalten. Wenn Sie Twitter auf einem
                  Browser nutzen, können Sie die personalisierte Werbung unter
                  http://optout.aboutads.info/?c=2&lang=EN deaktivieren. Twitter
                  ist aktiver Teilnehmer beim EU-U.S. Privacy Shield Framework.
                  Dieses Framework stellt eine korrekte Datenübertragung
                  zwischen den USA und der Europäischen Union sicher. Unter
                  https://www.privacyshield.gov/participant?id=a2zt0000000TO6hAAG
                  erfahren Sie mehr darüber. Wir hoffen, wir haben Ihnen einen
                  grundsätzlichen Überblick über die Datenverarbeitung durch
                  Twitter gegeben. Wir erhalten keinen Daten von Twitter und
                  tragen auch keine Verantwortung darüber, was Twitter mit Ihren
                  Daten macht. Falls Sie noch weitere Fragen zu diesem Thema
                  haben, empfehlen wir Ihnen die Twitter-Datenschutzerklärung
                  unter https://twitter.com/de/privacy. Pinterest
                  Datenschutzerklärung Wir verwenden auf unserer Seite Buttons
                  und Widgets des Social Media Netzwerks Pinterest, der Firma
                  Pinterest Inc.,808 Brannan Street, San Francisco, CA 94103,
                  USA. Durch den Aufruf von Seiten die solche Funktionen nutzen
                  werden Daten (IP-Adresse, Browserdaten, Datum und Zeitpunkt,
                  Cookies) an Pinterest übermittelt, gespeichert und
                  ausgewertet. Die Datenschutzrichtlinien, welche Informationen
                  Pinterest sammelt und wie sie diese verwenden finden Sie auf
                  https://policy.pinterest.com/de/privacy-policy. SoundCloud
                  Datenschutzerklärung Wir verwenden auf unserer Webseite
                  Funktionen des Social Media Netzwerks SoundCloud der Firma
                  SoundCloud Limited, Rheinsberger Str. 76/77, 10115 Berlin,
                  Deutschland. Durch die Verwendung der SoundCloud-Funktionen
                  wie das Abspielen von Musik werden Daten (IP-Adresse,
                  Browserdaten, Datum und Zeitpunkt, Cookies) an SoundCloud
                  übermittelt, gespeichert und ausgewertet. Sollten Sie ein
                  SoundCloud-Konto haben und angemeldet sein, werden diese Daten
                  Ihrem persönlichen Konto und den darin gespeicherten Daten
                  zugeordnet. Die Datenschutzrichtlinien, welche Informationen
                  SoundCloud sammelt und wie sie diese verwenden finden Sie auf
                  https://soundcloud.com/pages/privacy. Facebook-Pixel
                  Datenschutzerklärung Wir verwenden auf dieser Webseite das
                  Facebook Pixel von Facebook, einem Social Media Network der
                  Firma Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal
                  Harbour, Dublin 2 Ireland. Der auf dieser Seite implementierte
                  Code kann das Verhalten der Besucher auswerten, welche von
                  einer Facebook-Werbung auf diese Webseite gelangt sind. Dies
                  kann zur Verbesserung von Facebook-Werbeanzeigen genutzt
                  werden und diese Daten werden von Facebook erfasst und
                  gespeichert. Die erfassten Daten sind für uns nicht einsehbar
                  sondern nur im Rahmen von Werbeanzeigenschaltungen nutzbar.
                  Durch den Einsatz des Facebook-Pixel-Codes werden auch Cookies
                  gesetzt. Durch die Nutzung des Facebook-Pixels wird der Besuch
                  dieser Webseite Facebook mitgeteilt, damit Besucher auf
                  Facebook passende Anzeigen zu sehen bekommen. Wenn Sie ein
                  Facebook-Konto besitzen und angemeldet sind, wird der Besuch
                  dieser Webseite Ihrem Facebook-Benutzerkonto zugeordnet. Wie
                  das Facebook-Pixel für Werbekampagnen genutzt wird, erfahren
                  Sie auf
                  https://www.facebook.com/
                  <br />
                  business/learn/facebook
                  
                  -ads-pixel.
                  Sie können Ihre Einstellungen für Werbeanzeigen in Facebook
                  auf
                  https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen
                  verändern, sofern Sie in Facebook angemeldet sind. Auf
                  http://www.youronlinechoices.com/de/
                  <br />
                  praferenzmanagement/
                  können Sie Ihre Präferenzen hinsichtlich nutzungsbasierter
                  Online-Werbung verwalten. Sie können dort viele Anbieter auf
                  einmal deaktivieren oder aktivieren oder die Einstellungen für
                  einzelne Anbieter vornehmen. Mehr Informationen zur
                  Datenrichtlinie von Facebook finden Sie auf
                  https://www.facebook.com/policy.php. Google reCAPTCHA
                  Datenschutzerklärung Unser oberstes Ziel ist es, dass unsere
                  Webseite für Sie und für uns bestmöglich geschützt und sicher
                  ist. Um das zu gewährleisten, verwenden wir Google reCAPTCHA
                  der Firma Google Inc. (1600 Amphitheatre Parkway Mountain
                  View, CA 94043, USA). Mit reCAPTCHA können wir feststellen, ob
                  Sie auch wirklich ein Mensch aus Fleisch und Blut sind und
                  kein Roboter oder eine andere Spam-Software. Unter Spam
                  verstehen wir jede, auf elektronischen Weg, unerwünschte
                  Information, die uns ungefragter Weise zukommt. Bei den
                  klassischen CAPTCHAS mussten Sie zur Überprüfung meist Text-
                  oder Bildrätsel lösen. Mit reCAPTCHA von Google müssen wir Sie
                  meist nicht mit solchen Rätseln belästigen. Hier reicht es in
                  den meisten Fällen, wenn Sie einfach ein Häkchen setzen und so
                  bestätigen, dass Sie kein Bot sind. Mit der neuen Invisible
                  reCAPTCHA Version müssen Sie nicht mal mehr ein Häkchen
                  setzen. Wie das genau funktioniert und vor allem welche Daten
                  dafür verwendet werden, erfahren Sie im Verlauf dieser
                  Datenschutzerklärung. Rechtsgrundlage für die Verwendung ist
                  Artikel 6 (1) f (Rechtmäßigkeit der Verarbeitung), denn es
                  besteht ein berechtigtes Interesse diese Webseite vor Bots und
                  Spam-Software zu schützen. Was ist reCAPTCHA? reCAPTCHA ist
                  ein freier Captcha-Dienst von Google, der Webseiten vor
                  Spam-Software und den Missbrauch durch nicht-menschliche
                  Besucher schützt. Am häufigsten wird dieser Dienst verwendet,
                  wenn Sie Formulare im Internet ausfüllen. Ein Captcha-Dienst
                  ist ein automatischer Turing-Test, der sicherstellen soll,
                  dass eine Handlung im Internet von einem Menschen und nicht
                  von einem Bot vorgenommen wird. Im klassischen Turing-Test
                  (benannt nach dem Informatiker Alan Turing) stellt ein Mensch
                  die Unterscheidung zwischen Bot und Mensch fest. Bei Captchas
                  übernimmt das auch der Computer bzw. ein Softwareprogramm.
                  Klassische Captchas arbeiten mit kleinen Aufgaben, die für
                  Menschen leicht zu lösen sind, doch für Maschinen erhebliche
                  Schwierigkeiten aufweisen. Bei reCAPTCHA müssen Sie aktiv
                  keine Rätsel mehr lösen. Das Tool verwendet moderne
                  Risikotechniken, um Menschen von Bots zu unterscheiden. Hier
                  müssen Sie nur noch das Textfeld „Ich bin kein Roboter“
                  ankreuzen bzw. bei Invisible reCAPTCHA ist selbst das nicht
                  mehr nötig. Bei reCAPTCHA wird ein JavaScript-Element in den
                  Quelltext eingebunden und dann läuft das Tool im Hintergrund
                  und analysiert Ihr Benutzerverhalten. Aus diesen Useraktionen
                  berechnet die Software einen sogenannten Captcha-Score. Google
                  berechnet mit diesem Score schon vor der Captcha-Eingabe wie
                  hoch die Wahrscheinlichkeit ist, dass Sie ein Mensch sind.
                  ReCAPTCHA bzw. Captchas im Allgemeinen kommen immer dann zum
                  Einsatz, wenn Bots gewisse Aktionen (wie z.B. Registrierungen,
                  Umfragen usw.) manipulieren oder missbrauchen könnten. Warum
                  verwenden wir reCAPTCHA auf unserer Website? Wir wollen nur
                  Menschen aus Fleisch und Blut auf unserer Seite begrüßen. Bots
                  oder Spam-Software unterschiedlichster Art dürfen getrost
                  zuhause bleiben. Darum setzen wir alle Hebel in Bewegung, uns
                  zu schützen und die bestmögliche Benutzerfreundlichkeit für
                  Sie anzubieten. Aus diesem Grund verwenden wir Google
                  reCAPTCHA der Firma Google. So können wir uns ziemlich sicher
                  sein, dass wir eine „botfreie“ Webseite bleiben. Durch die
                  Verwendung von reCAPTCHA werden Daten an Google übermittelt,
                  die Google verwendet, um festzustellen, ob Sie auch wirklich
                  ein Mensch sind. reCAPTCHA dient also der Sicherheit unserer
                  Webseite und in weiterer Folge damit auch Ihrer Sicherheit.
                  Zum Beispiel könnte es ohne reCAPTCHA passieren, dass bei
                  einer Registrierung ein Bot möglichst viele E-Mail-Adressen
                  registriert, um im Anschluss Foren oder Blogs mit
                  unerwünschten Werbeinhalten „zuzuspamen“. Mit reCAPTCHA können
                  wir solche Botangriffe vermeiden. Welche Daten werden von
                  reCAPTCHA gespeichert? ReCAPTCHA sammelt personenbezogene
                  Daten von Usern, um festzustellen, ob die Handlungen auf
                  unserer Webseite auch wirklich von Menschen stammen. Es kann
                  also die IP-Adresse und andere Daten, die Google für den
                  reCAPTCHA-Dienst benötigt, an Google versendet werden.
                  IP-Adressen werden innerhalb der Mitgliedstaaten der EU oder
                  anderer Vertragsstaaten des Abkommens über den Europäischen
                  Wirtschaftsraum fast immer zuvor gekürzt, bevor die Daten auf
                  einem Server in den USA landen. Die IP-Adresse wird nicht mit
                  anderen Daten von Google kombiniert, sofern Sie nicht während
                  der Verwendung von reCAPTCHA mit Ihrem Google-Konto angemeldet
                  sind. Zuerst prüft der reCAPTCHA-Algorithmus, ob auf Ihrem
                  Browser schon Google-Cookies von anderen Google-Diensten
                  (YouTube. Gmail usw.) platziert sind. Anschließend setzt
                  reCAPTCHA ein zusätzliches Cookie in Ihrem Browser und erfasst
                  einen Schnappschuss Ihres Browserfensters. Die folgende Liste
                  von gesammelten Browser- und Userdaten, hat nicht den Anspruch
                  auf Vollständigkeit. Vielmehr sind es Beispiele von Daten, die
                  nach unserer Erkenntnis, von Google verarbeitet werden.
                  Referrer URL (die Adresse der Seite von der der Besucher
                  kommt) IP-Adresse (z.B. 256.123.123.1) Infos über das
                  Betriebssystem (die Software, die den Betrieb Ihres Computers
                  ermöglicht. Bekannte Betriebssysteme sind Windows, Mac OS X
                  oder Linux) Cookies (kleine Textdateien, die Daten in Ihrem
                  Browser speichern) Maus- und Keyboardverhalten (jede Aktion,
                  die Sie mit der Maus oder der Tastatur ausführen wird
                  gespeichert) Datum und Spracheinstellungen (welche Sprache
                  bzw. welches Datum Sie auf Ihrem PC voreingestellt haben wird
                  gespeichert) Alle Javascript-Objekte (JavaScript ist eine
                  Programmiersprache, die Webseiten ermöglicht, sich an den User
                  anzupassen. JavaScript-Objekte können alle möglichen Daten
                  unter einem Namen sammeln) Bildschirmauflösung (zeigt an aus
                  wie vielen Pixeln die Bilddarstellung besteht) Unumstritten
                  ist, dass Google diese Daten verwendet und analysiert noch
                  bevor Sie auf das Häkchen „Ich bin kein Roboter“ klicken. Bei
                  der Invisible reCAPTCHA-Version fällt sogar das Ankreuzen weg
                  und der ganze Erkennungsprozess läuft im Hintergrund ab. Wie
                  viel und welche Daten Google genau speichert, erfährt man von
                  Google nicht im Detail. Folgende Cookies werden von reCAPTCHA
                  verwendet: Hierbei beziehen wir uns auf die reCAPTCHA
                  Demo-Version von Google unter
                  https://www.google.com/recaptcha/api2/demo. All diese Cookies
                  benötigen zu Trackingzwecken eine eindeutige Kennung. Hier ist
                  eine Liste an Cookies, die Google reCAPTCHA auf der
                  Demo-Version gesetzt hat: Name: IDE Ablaufzeit: nach einem
                  Jahr Verwendung: Dieses Cookie wird von der Firma DoubleClick
                  (gehört auch Google) gesetzt, um die Aktionen eines Users auf
                  der Webseite im Umgang mit Werbeanzeigen zu registrieren und
                  zu melden. So kann die Werbewirksamkeit gemessen und
                  entsprechende Optimierungsmaßnahmen getroffen werden. IDE wird
                  in Browsern unter der Domain doubleclick.net gespeichert.
                  Beispielwert:
                  WqTUmlnmv_qXyi_DGNPLESKnRNrpgXoy1K-pAZtAkMbHI-311136352 Name:
                  1P_JAR Ablaufzeit: nach einem Monat Verwendung: Dieses Cookie
                  sammelt Statistiken zur Website-Nutzung und misst Conversions.
                  Eine Conversion entsteht z.B., wenn ein User zu einem Käufer
                  wird. Das Cookie wird auch verwendet, um Usern relevante
                  Werbeanzeigen einzublenden. Weiters kann man mit dem Cookie
                  vermeiden, dass ein User dieselbe Anzeige mehr als einmal zu
                  Gesicht bekommt. Beispielwert: 2019-5-14-12 Name: ANID
                  Ablaufzeit: nach 9 Monaten Verwendung: Viele Infos konnten wir
                  über dieses Cookie nicht in Erfahrung bringen. In der
                  Datenschutzerklärung von Google wird das Cookie im
                  Zusammenhang mit „Werbecookies“ wie z. B. “DSID”, “FLC”,
                  “AID”, “TAID” erwähnt. ANID wird unter Domain google.com
                  gespeichert. Beispielwert: U7j1v3dZa3111363520xgZFmiqWppRWKOr
                  Name: CONSENT Ablaufzeit: nach 19 Jahren Verwendung: Das
                  Cookie speichert den Status der Zustimmung eines Users zur
                  Nutzung unterschiedlicher Services von Google. CONSENT dient
                  auch der Sicherheit, um User zu überprüfen, Betrügereien von
                  Anmeldeinformationen zu verhindern und Userdaten vor
                  unbefugten Angriffen zu schützen. Beispielwert:
                  YES+AT.de+20150628-20-0 Name: NID Ablaufzeit: nach 6 Monaten
                  Verwendung: NID wird von Google verwendet, um Werbeanzeigen an
                  Ihre Google-Suche anzupassen. Mit Hilfe des Cookies „erinnert“
                  sich Google an Ihre meist eingegebenen Suchanfragen oder Ihre
                  frühere Interaktion mit Anzeigen. So bekommen Sie immer
                  maßgeschneiderte Werbeanzeigen. Das Cookie enthält eine
                  einzigartige ID, die Google benutzt um persönliche
                  Einstellungen des Users für Werbezwecke zu sammeln.
                  Beispielwert: 0WmuWqy311136352zILzqV_nmt3sDXwPeM5Q Name: DV
                  Ablaufzeit: nach 10 Minuten Verwendung: Sobald Sie das „Ich
                  bin kein Roboter“-Häkchen angekreuzt haben, wird dieses Cookie
                  gesetzt. Das Cookie wird von Google Analytics für
                  personalisierte Werbung verwendet. DV sammelt Informationen in
                  anonymisierter Form und wird weiters benutzt, um
                  User-Unterscheidungen treffen zu können. Beispielwert:
                  gEAABBCjJMXcI0dSAAAANbqc311136352 Anmerkung: Diese Aufzählung
                  kann keinen Anspruch auf Vollständigkeit erheben, da Google
                  erfahrungsgemäß die Wahl ihrer Cookies immer wieder auch
                  verändert. Wie lange und wo werden die Daten gespeichert?
                  Durch das Einfügen von reCAPTCHA werden Daten von Ihnen auf
                  den Google-Server übertragen. Wo genau diese Daten gespeichert
                  werden, stellt Google, selbst nach wiederholtem Nachfragen,
                  nicht klar dar. Ohne eine Bestätigung von Google erhalten zu
                  haben, ist davon auszugehen, dass Daten wie Mausinteraktion,
                  Verweildauer auf der Webseite oder Spracheinstellungen auf den
                  europäischen oder amerikanischen Google-Servern gespeichert
                  werden. Die IP-Adresse, die Ihr Browser an Google übermittelt,
                  wird grundsätzlich nicht mit anderen Google-Daten aus weiteren
                  Google-Diensten zusammengeführt. Wenn Sie allerdings während
                  der Nutzung des reCAPTCHA-Plug-ins bei Ihrem Google-Konto
                  angemeldet sind, werden die Daten zusammengeführt. Dafür
                  gelten die abweichenden Datenschutzbestimmungen der Firma
                  Google. Wie kann ich meine Daten löschen bzw. die
                  Datenspeicherung verhindern? Wenn Sie wollen, dass über Sie
                  und über Ihr Verhalten keine Daten an Google übermittelt
                  werden, müssen Sie sich, bevor Sie unsere Webseite besuchen
                  bzw. die reCAPTCHA-Software verwenden, bei Google vollkommen
                  ausloggen und alle Google-Cookies löschen. Grundsätzlich
                  werden die Daten sobald Sie unsere Seite aufrufen automatisch
                  an Google übermittelt. Um diese Daten wieder zu löschen,
                  müssen Sie den Google-Support auf
                  https://support.google.com/?hl=de&tid=311136352 kontaktieren.
                  Wenn Sie also unsere Webseite verwenden, erklären Sie sich
                  einverstanden, dass Google LLC und deren Vertreter automatisch
                  Daten erheben, bearbeiten und nutzen. Etwas mehr über
                  reCAPTCHA erfahren Sie auf der Webentwickler-Seite von Google
                  auf https://developers.google.com/recaptcha/. Google geht hier
                  zwar auf die technische Entwicklung der reCAPTCHA näher ein,
                  doch genaue Informationen über Datenspeicherung und
                  datenschutzrelevanten Themen sucht man auch dort vergeblich.
                  Eine gute Übersicht über die grundsätzliche Verwendung von
                  Daten bei Google finden Sie in der hauseigenen
                  Datenschutzerklärung auf
                  https://www.google.com/intl/de/
                  <br />
                  policies/privacy/. Quelle:
                  Erstellt mit dem Datenschutz Generator von AdSimple in
                  Kooperation mit slashtechnik.de
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div key={2} className="container rounded-md ">
        <button
          onClick={() => toggleExpand(2)}
          className="mt-20 flex w-full items-center justify-between  px-6 py-4 text-lg font-medium text-gray-800"
        >
          <span className="leading-title text-left text-2xl font-semibold md:text-3xl">
            AGB & KUNDENINFO
          </span>
          <motion.span
            className="flex h-12 w-12 items-center justify-center"
            initial={{ rotate: 0 }}
            animate={{ rotate: expandedSectionIndex === 2 ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {expandedSectionIndex === 2 ? (
              <FiMinus className="rotate-90" />
            ) : (
              <FiPlus />
            )}
          </motion.span>
        </button>
        <AnimatePresence>
          {expandedSectionIndex === 2 && (
            <motion.div
              key="content"
              className="p-6 text-gray-700"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="relative h-60 w-full object-cover">
                <Image
                  src={Agb}
                  alt="Title 1"
                  layout="fill"
                  priority={true}
                />
              </div>
              <div className="flex flex-col justify-center">
                <p>
                  <br />
                  1) Geltungsbereich <br />
                  1.1 Diese Allgemeinen Geschäftsbedingungen (nachfolgend
                  &quot;AGB&quot;) des Björn Seibert, handelnd unter
                  &quot;BE-SCooTER® ...FUNsport <br />
                  erFAHREN!&quot; (nachfolgend &quot;Verkäufer&quot;), gelten
                  für alle Verträge über die Lieferung von Waren, die ein
                  Verbraucher oder <br />
                  Unternehmer (nachfolgend „Kunde“) mit dem Verkäufer
                  hinsichtlich der vom Verkäufer in seinem Online-Shop
                  dargestellten Waren <br />
                  abschließt. Hiermit wird der Einbeziehung von eigenen
                  Bedingungen des Kunden widersprochen, es sei denn, es ist
                  etwas <br />
                  anderes vereinbart.
                  <br />
                  <br />
                  <br />
                  <br />
                  1.2 Für Verträge über die Lieferung von Gutscheinen gelten
                  diese AGB entsprechend, sofern insoweit nicht ausdrücklich
                  etwas <br />
                  Abweichendes geregelt ist.
                  <br />
                  <br />
                  <br />
                  <br />
                  1.3 Für Verträge über die Lieferung von Tickets gelten diese
                  AGB entsprechend, sofern insoweit nicht ausdrücklich etwas{' '}
                  <br />
                  Abweichendes geregelt ist. Dabei regeln diese AGB lediglich
                  den Verkauf von Tickets für bestimmte, in der
                  Artikelbeschreibung <br />
                  des Verkäufers näher bezeichnete Veranstaltungen und nicht die
                  Durchführung dieser Veranstaltungen. Für die Durchführung{' '}
                  <br />
                  der Veranstaltungen gelten ausschließlich die gesetzlichen
                  Bestimmungen im Verhältnis zwischen dem Kunden und dem <br />
                  Veranstalter sowie ggf. hiervon abweichende Bedingungen des
                  Veranstalters. Sofern der Verkäufer nicht zugleich auch
                  Veranstalter
                  <br /> ist, haftet er nicht für die ordnungsgemäße
                  Durchführung der Veranstaltung, für die ausschließlich der{' '}
                  <br />
                  jeweilige Veranstalter verantwortlich ist.
                  <br />
                  <br />
                  <br />
                  <br />
                  1.4 Verbraucher im Sinne dieser AGB ist jede natürliche
                  Person, die ein Rechtsgeschäft zu Zwecken abschließt, die
                  überwiegend <br />
                  weder ihrer gewerblichen noch ihrer selbständigen beruflichen
                  Tätigkeit zugerechnet werden können. Unternehmer im Sinne{' '}
                  <br />
                  dieser AGB ist eine natürliche oder juristische Person oder
                  eine rechtsfähige Personengesellschaft, die bei Abschluss
                  eines
                  <br /> Rechtsgeschäfts in Ausübung ihrer gewerblichen oder
                  selbständigen beruflichen Tätigkeit handelt.
                  <br />
                  <br />
                  <br />
                  <br />
                  1.5 Gegenstand des Vertrages kann – je nach
                  Produktbeschreibung des Verkäufers - sowohl der Bezug von
                  Waren im Wege einer Einmallieferung als auch der Bezug von
                  Waren im Wege einer dauerhaften Lieferung (nachfolgend
                  „Abonnementvertrag“) sein. Beim Abonnementvertrag verpflichtet
                  sich der Verkäufer, dem Kunden die vertraglich geschuldete
                  Ware für die Dauer der vereinbarten Vertragslaufzeit in den
                  vertraglich geschuldeten Zeitintervallen zu liefern.
                  <br />
                  <br />
                  <br />
                  2) Vertragsschluss
                  <br />
                  <br />
                  <br />
                  <br />
                  2.1 Die im Online-Shop des Verkäufers enthaltenen
                  Produktbeschreibungen stellen keine verbindlichen Angebote
                  seitens des <br />
                  Verkäufers dar, sondern dienen zur Abgabe eines verbindlichen
                  Angebots durch den Kunden.
                  <br />
                  <br />
                  <br />
                  <br />
                  2.2 Der Kunde kann das Angebot über das in den Online-Shop des
                  Verkäufers integrierte Online-Bestellformular abgeben. Dabei
                  gibt der Kunde, nachdem er die ausgewählten Waren in den
                  virtuellen Warenkorb gelegt und den elektronischen
                  Bestellprozess durchlaufen hat, durch Klicken des den
                  Bestellvorgang abschließenden Buttons ein rechtlich
                  verbindliches Vertragsangebot in Bezug auf die im Warenkorb
                  enthaltenen Waren ab. Ferner kann der Kunde das Angebot auch
                  telefonisch, per E-Mail oder postalisch gegenüber dem
                  Verkäufer abgeben.
                  <br />
                  <br />
                  <br />
                  2.3 Der Verkäufer kann das Angebot des Kunden innerhalb von
                  fünf Tagen annehmen,
                  <br />
                  <br />
                  <br />
                  <br />
                  indem er dem Kunden eine schriftliche Auftragsbestätigung oder
                  eine Auftragsbestätigung in Textform (Fax oder E-Mail) <br />
                  übermittelt, wobei insoweit der Zugang der Auftragsbestätigung
                  beim Kunden maßgeblich ist, oder
                  <br />
                  <br />
                  <br />
                  <br />
                  indem er dem Kunden die bestellte Ware liefert, wobei insoweit
                  der Zugang der Ware beim Kunden maßgeblich ist, oder
                  <br />
                  <br />
                  <br />
                  <br />
                  indem er den Kunden nach Abgabe von dessen Bestellung zur
                  Zahlung auffordert.
                  <br />
                  <br />
                  <br />
                  Liegen mehrere der vorgenannten Alternativen vor, kommt der
                  Vertrag in dem Zeitpunkt zustande, in dem eine der
                  vorgenannten Alternativen zuerst eintritt. Die Frist zur
                  Annahme des Angebots beginnt am Tag nach der Absendung des
                  Angebots durch den Kunden zu laufen und endet mit dem Ablauf
                  des fünften Tages, welcher auf die Absendung des Angebots
                  folgt. Nimmt der Verkäufer das Angebot des Kunden innerhalb
                  vorgenannter Frist nicht an, so gilt dies als Ablehnung des
                  Angebots mit der Folge, dass der Kunde nicht mehr an seine
                  Willenserklärung gebunden ist.
                  <br />
                  <br />
                  <br />
                  2.4 Bei Auswahl der Zahlungsart „PayPal Express“ erfolgt die
                  Zahlungsabwicklung über den Zahlungsdienstleister PayPal
                  (Europe) S.à r.l. et Cie, S.C.A., 22-24 Boulevard Royal,
                  L-2449 Luxembourg (im Folgenden: „PayPal“), unter Geltung der
                  PayPal-Nutzungsbedingungen, einsehbar unter
                  <NavLink href="https://www.paypal.com/de/webapps/mpp/ua/useragreement-full">
                    user agreement paypal
                  </NavLink>
                  oder - falls der Kunde nicht über ein PayPal-Konto verfügt –
                  unter Geltung der Bedingungen für Zahlungen ohne PayPal-Konto,
                  einsehbar unter
                  <NavLink href="https://www.paypal.com/de/webapps/mpp/ua/privacywax-full">
                    paypal privacy
                  </NavLink>
                  Wählt der Kunde im Rahmen des Online-Bestellvorgangs „PayPal
                  Express“ als Zahlungsart aus, erteilt er durch Klicken des den
                  Bestellvorgang abschließenden Buttons zugleich auch einen
                  Zahlungsauftrag an PayPal. Für diesen Fall erklärt der
                  Verkäufer schon jetzt die Annahme des Angebots des Kunden in
                  dem Zeitpunkt, in dem der Kunde durch Klicken des den
                  Bestellvorgang abschließenden Buttons den Zahlungsvorgang
                  auslöst.
                  <br />
                  <br />
                  <br />
                  2.5 Bei Auswahl der Zahlungsart &quot;Amazon Payments&quot;
                  erfolgt die Zahlungsabwicklung über den Zahlungsdienstleister
                  Amazon Payments Europe s.c.a., 38 avenue John F. Kennedy,
                  L-1855 Luxemburg (im Folgenden: „Amazon“), unter Geltung der
                  Amazon Payments Europe Nutzungsvereinbarung, einsehbar unter
                  https://payments.amazon.de/help/201751590. Wählt der Kunde im
                  Rahmen des Online-Bestellvorgangs „Amazon Payments“ als
                  Zahlungsart aus, erteilt er durch Klicken des den
                  Bestellvorgang abschließenden Buttons zugleich auch einen
                  Zahlungsauftrag an Amazon. Für diesen Fall erklärt der
                  Verkäufer schon jetzt die Annahme des Angebots des Kunden in
                  dem Zeitpunkt, in dem der Kunde durch Klicken des den
                  Bestellvorgang abschließenden Buttons den Zahlungsvorgang
                  auslöst.
                  <br />
                  <br />
                  <br />
                  2.6 Bei der Abgabe eines Angebots über das
                  Online-Bestellformular des Verkäufers wird der Vertragstext
                  nach dem Vertragsschluss vom Verkäufer gespeichert und dem
                  Kunden nach Absendung von dessen Bestellung in Textform (z. B.
                  E-Mail, Fax oder Brief) übermittelt. Eine darüber
                  hinausgehende Zugänglichmachung des Vertragstextes durch den
                  Verkäufer erfolgt nicht. Sofern der Kunde vor Absendung seiner
                  Bestellung ein Nutzerkonto im Online-Shop des Verkäufers
                  eingerichtet hat, werden die Bestelldaten auf der Website des
                  Verkäufers archiviert und können vom Kunden über dessen
                  passwortgeschütztes Nutzerkonto unter Angabe der
                  entsprechenden Login-Daten kostenlos abgerufen werden.
                  <br />
                  <br />
                  2.7 Vor verbindlicher Abgabe der Bestellung über das
                  Online-Bestellformular des Verkäufers kann der Kunde mögliche
                  Eingabefehler durch aufmerksames Lesen der auf dem Bildschirm
                  dargestellten Informationen erkennen. Ein wirksames
                  technisches Mittel zur besseren Erkennung von Eingabefehlern
                  kann dabei die Vergrößerungsfunktion des Browsers sein, mit
                  deren Hilfe die Darstellung auf dem Bildschirm vergrößert
                  wird. Seine Eingaben kann der Kunde im Rahmen des
                  elektronischen Bestellprozesses so lange über die üblichen
                  Tastatur- und Mausfunktionen korrigieren, bis er den den
                  Bestellvorgang abschließenden Button anklickt.
                  <br />
                  <br />
                  <br />
                  2.8 Für den Vertragsschluss stehen die deutsche und die
                  englische Sprache zur Verfügung.
                  <br />
                  <br />
                  <br />
                  2.9 Die Bestellabwicklung und Kontaktaufnahme finden in der
                  Regel per E-Mail und automatisierter Bestellabwicklung statt.
                  Der Kunde hat sicherzustellen, dass die von ihm zur
                  Bestellabwicklung angegebene E-Mail-Adresse zutreffend ist, so
                  dass unter dieser Adresse die vom Verkäufer versandten E-Mails
                  empfangen werden können. Insbesondere hat der Kunde bei dem
                  Einsatz von SPAM-Filtern sicherzustellen, dass alle vom
                  Verkäufer oder von diesem mit der Bestellabwicklung
                  beauftragten Dritten versandten E-Mails zugestellt werden
                  können.
                  <br />
                  <br />
                  <br />
                  3) Widerrufsrecht
                  <br />
                  <br />
                  <br />
                  3.1 Verbrauchern steht grundsätzlich ein Widerrufsrecht zu.
                  <br />
                  <br />
                  <br />
                  3.2 Nähere Informationen zum Widerrufsrecht ergeben sich aus
                  der Widerrufsbelehrung des Verkäufers.
                  <br />
                  <br />
                  <br />
                  3.3 Gemäß § 312g Abs. 2 Nr. 9 BGB besteht ein Widerrufsrecht,
                  soweit nichts anderes vereinbart ist, nicht bei Verträgen zur
                  Erbringung von Dienstleistungen im Zusammenhang mit
                  Freizeitbetätigungen, wenn der Vertrag für die Erbringung
                  einen spezifischen Termin oder Zeitraum vorsieht. Danach ist
                  ein Widerrufsrecht auch bei Verträgen ausgeschlossen, die den
                  Verkauf von Tickets für termingebundene
                  Freizeitveranstaltungen zum Gegenstand haben.
                  <br />
                  <br />
                  <br />
                  4) Preise und Zahlungsbedingungen
                  <br />
                  <br />
                  <br />
                  4.1 Sofern sich aus der Produktbeschreibung des Verkäufers
                  nichts anderes ergibt, handelt es sich bei den angegebenen
                  Preisen um Gesamtpreise, die die gesetzliche Umsatzsteuer
                  enthalten. Gegebenenfalls zusätzlich anfallende Liefer- und
                  Versandkosten werden in der jeweiligen Produktbeschreibung
                  gesondert angegeben.
                  <br />
                  <br />
                  <br />
                  4.2 Die Zahlungsmöglichkeit/en wird/werden dem Kunden im
                  Online-Shop des Verkäufers mitgeteilt.
                  <br />
                  <br />
                  4.3 Ist Vorauskasse per Banküberweisung vereinbart, ist die
                  Zahlung sofort nach Vertragsabschluss fällig, sofern die
                  Parteien keinen späteren Fälligkeitstermin vereinbart haben.
                  <br />
                  <br />
                  <br />
                  4.4 Bei Zahlung mittels einer von PayPal angebotenen
                  Zahlungsart erfolgt die Zahlungsabwicklung über den
                  Zahlungsdienstleister PayPal (Europe) S.à r.l. et Cie, S.C.A.,
                  22-24 Boulevard Royal, L-2449 Luxembourg (im Folgenden:
                  &quot;PayPal&quot;, unter Geltung der
                  PayPal-Nutzungsbedingungen, einsehbar unter
                  <NavLink href="https://www.paypal.com/de/webapps/mpp/ua/useragreement-full">
                    paypal useragreement
                  </NavLink>
                  oder - falls der Kunde nicht über ein PayPal-Konto verfügt –
                  unter Geltung der Bedingungen für Zahlungen ohne PayPal-Konto,
                  einsehbar unter
                  <NavLink href="https://www.paypal.com/de/webapps/mpp/ua/privacywax-full">
                    paypal privacy
                  </NavLink>
                  .
                  <br />
                  <br />
                  <br />
                  4.5 Bei Auswahl der Zahlungsart „SOFORT“ erfolgt die
                  Zahlungsabwicklung über den Zahlungsdienstleister SOFORT GmbH,
                  Theresienhöhe 12, 80339 München (im Folgenden „SOFORT“). Um
                  den Rechnungsbetrag über „SOFORT“ bezahlen zu können, muss der
                  Kunde über ein für die Teilnahme an „SOFORT“ frei geschaltetes
                  Online-Banking-Konto verfügen, sich beim Zahlungsvorgang
                  entsprechend legitimieren und die Zahlungsanweisung gegenüber
                  „SOFORT“ bestätigen. Die Zahlungstransaktion wird unmittelbar
                  danach von „SOFORT“ durchgeführt und das Bankkonto des Kunden
                  belastet. Nähere Informationen zur Zahlungsart „SOFORT“ kann
                  der Kunde im Internet unter https://www.klarna.com/sofort/
                  abrufen.
                  <br />
                  <br />
                  <br />
                  4.6 Bei Auswahl einer über den Zahlungsdienst &quot;Shopify
                  Payments&quot; angebotenen Zahlungsarten erfolgt die
                  Zahlungsabwicklung über den Zahlungsdienstleister Stripe
                  Payments Europe Ltd., 1 Grand Canal Street Lower, Grand Canal
                  Dock, Dublin, Irland (nachfolgend &quot;Stripe&quot;). Die
                  einzelnen über Shopify Payments angebotenen Zahlungsarten
                  werden dem Kunden im Online-Shop des Verkäufers mitgeteilt.
                  Zur Abwicklung von Zahlungen kann sich Stripe weiterer
                  Zahlungsdienste bedienen, für die ggf. besondere
                  Zahlungsbedingungen gelten, auf die der Kunde ggf. gesondert
                  hingewiesen wird. Weitere Informationen zu &quot;Shopify
                  Payments&quot; sind im Internet unter
                  https://www.shopify.com/legal/terms-payments-de abrufbar.
                  <br />
                  <br />
                  <br />
                  4.7 Bei Auswahl der Zahlungsart Rechnungskauf wird der
                  Kaufpreis fällig, nachdem die Ware geliefert und in Rechnung
                  gestellt wurde. In diesem Fall ist der Kaufpreis innerhalb von
                  7(sieben) Tagen ab Erhalt der Rechnung ohne Abzug zu zahlen,
                  sofern nichts anderes vereinbart ist. Der Verkäufer behält
                  sich vor, die Zahlungsart Rechnungskauf nur bis zu einem
                  bestimmten Bestellvolumen anzubieten und diese Zahlungsart bei
                  Überschreitung des angegebenen Bestellvolumens abzulehnen. In
                  diesem Fall wird der Verkäufer den Kunden in seinen
                  Zahlungsinformationen im Online-Shop auf eine entsprechende
                  Zahlungsbeschränkung hinweisen.
                  <br />
                  <br />
                  <br />
                  4.8 Bei Auswahl der Zahlungsart „PayPal Lastschrift“ zieht
                  PayPal den Rechnungsbetrag nach Erteilung eines
                  SEPA-Lastschriftmandats, nicht jedoch vor Ablauf der Frist für
                  die Vorabinformation im Auftrag des Verkäufers vom Bankkonto
                  des Kunden ein. Vorabinformation
                  (&quot;Pre-Notification&quot;) ist jede Mitteilung (z.B.
                  Rechnung, Police, Vertrag) an den Kunden, die eine Belastung
                  mittels SEPA-Lastschrift ankündigt. Wird die Lastschrift
                  mangels ausreichender Kontodeckung oder aufgrund der Angabe
                  einer falschen Bankverbindung nicht eingelöst oder
                  widerspricht der Kunde der Abbuchung, obwohl er hierzu nicht
                  berechtigt ist, hat der Kunde die durch die Rückbuchung des
                  jeweiligen Kreditinstituts entstehenden Gebühren zu tragen,
                  wenn er dies zu vertreten hat.
                  <br />
                  <br />
                  <br />
                  5) Liefer- und Versandbedingungen
                  <br />
                  <br />
                  <br />
                  5.1 Die Lieferung von Waren erfolgt auf dem Versandweg an die
                  vom Kunden angegebene Lieferanschrift, sofern nichts anderes
                  vereinbart ist. Bei der Abwicklung der Transaktion ist die in
                  der Bestellabwicklung des Verkäufers angegebene
                  Lieferanschrift maßgeblich.
                  <br />
                  <br />
                  <br />
                  5.2 Bei Waren, die per Spedition geliefert werden, erfolgt die
                  Lieferung &quot;frei Bordsteinkante&quot;, also bis zu der der
                  Lieferadresse nächst gelegenen öffentlichen Bordsteinkante,
                  sofern sich aus den Versandinformationen im Online-Shop des
                  Verkäufers nichts anderes ergibt und sofern nichts anderes
                  vereinbart ist.
                  <br />
                  <br />
                  <br />
                  5.3 Scheitert die Zustellung der Ware aus Gründen, die der
                  Kunde zu vertreten hat, trägt der Kunde die dem Verkäufer
                  hierdurch entstehenden angemessenen Kosten. Dies gilt im
                  Hinblick auf die Kosten für die Hinsendung nicht, wenn der
                  Kunde sein Widerrufsrecht wirksam ausübt. Für die
                  Rücksendekosten gilt bei wirksamer Ausübung des
                  Widerrufsrechts durch den Kunden die in der Widerrufsbelehrung
                  des Verkäufers hierzu getroffene Regelung.
                  <br />
                  <br />
                  <br />
                  5.4 Bei Selbstabholung informiert der Verkäufer den Kunden
                  zunächst per E-Mail darüber, dass die von ihm bestellte Ware
                  zur Abholung bereit steht. Nach Erhalt dieser E-Mail kann der
                  Kunde die Ware nach Absprache mit dem Verkäufer am Sitz des
                  Verkäufers abholen. In diesem Fall werden keine Versandkosten
                  berechnet.
                  <br />
                  <br />
                  <br />
                  5.5 Gutscheine werden dem Kunden wie folgt überlassen:
                  <br />
                  <br />
                  <br />
                  per E-Mail
                  <br />
                  <br />
                  <br />
                  postalisch
                  <br />
                  <br />
                  <br />
                  5.6 Tickets werden dem Kunden wie folgt überlassen:
                  <br />
                  <br />
                  <br />
                  per E-Mail
                  <br />
                  <br />
                  <br />
                  postalisch
                  <br />
                  <br />
                  <br />
                  6) Vertragsdauer und Vertragsbeendigung bei
                  Abonnementverträgen
                  <br />
                  <br />
                  <br />
                  6.1 Abonnementverträge werden unbefristet geschlossen und
                  können vom Kunden zum Ende eines jeden Monats gekündigt
                  werden.
                  <br />
                  <br />
                  <br />
                  6.2 Das Recht zur außerordentlichen Kündigung aus wichtigem
                  Grund bleibt unberührt. Ein wichtiger Grund liegt vor, wenn
                  dem kündigenden Teil unter Berücksichtigung aller Umstände des
                  Einzelfalls und unter Abwägung der beiderseitigen Interessen
                  die Fortsetzung des Vertragsverhältnisses bis zur vereinbarten
                  Beendigung oder bis zum Ablauf einer Kündigungsfrist nicht
                  zugemutet werden kann.
                  <br />
                  <br />
                  <br />
                  6.3 Kündigungen haben schriftlich oder in Textform (z. B. per
                  E-Mail) zu erfolgen.
                  <br />
                  <br />
                  <br />
                  7) Eigentumsvorbehalt
                  <br />
                  <br />
                  <br />
                  Tritt der Verkäufer in Vorleistung, behält er sich bis zur
                  vollständigen Bezahlung des geschuldeten Kaufpreises das
                  Eigentum an der gelieferten Ware vor.
                  <br />
                  <br />
                  <br />
                  8) Mängelhaftung (Gewährleistung)
                  <br />
                  <br />
                  <br />
                  8.1 Ist die Kaufsache mangelhaft, gelten die Vorschriften der
                  gesetzlichen Mängelhaftung.
                  <br />
                  <br />
                  <br />
                  8.2 Abweichend hiervon gilt bei gebrauchten Waren:
                  Mängelansprüche sind ausgeschlossen, wenn der Mangel erst nach
                  Ablauf eines Jahres ab Ablieferung der Ware auftritt. Mängel,
                  die innerhalb eines Jahres ab Ablieferung der Ware auftreten,
                  können innerhalb der gesetzlichen Verjährungsfrist geltend
                  gemacht werden. Die Verkürzung der Haftungsdauer auf ein Jahr
                  gilt jedoch nicht
                  <br />
                  <br />
                  <br />
                  für Sachen, die entsprechend ihrer üblichen Verwendungsweise
                  für ein Bauwerk verwendet worden sind und dessen
                  Mangelhaftigkeit verursacht haben,
                  <br />
                  <br />
                  <br />
                  für Schadensersatz- und Aufwendungsersatzansprüche des Kunden,
                  sowie
                  <br />
                  <br />
                  <br />
                  für den Fall, dass der Verkäufer den Mangel arglistig
                  verschwiegen hat.
                  <br />
                  <br />
                  <br />
                  8.3 Der Kunde wird gebeten, angelieferte Waren mit
                  offensichtlichen Transportschäden bei dem Zusteller zu
                  reklamieren und den Verkäufer hiervon in Kenntnis zu setzen.
                  Kommt der Kunde dem nicht nach, hat dies keinerlei
                  Auswirkungen auf seine gesetzlichen oder vertraglichen
                  Mängelansprüche.
                  <br />
                  <br />
                  <br />
                  9) Besondere Bedingungen für die Verarbeitung von Waren nach
                  bestimmten Vorgaben des Kunden
                  <br />
                  <br />
                  <br />
                  9.1 Schuldet der Verkäufer nach dem Inhalt des Vertrages neben
                  der Warenlieferung auch die Verarbeitung der Ware nach
                  bestimmten Vorgaben des Kunden, hat der Kunde dem Betreiber
                  alle für die Verarbeitung erforderlichen Inhalte wie Texte,
                  Bilder oder Grafiken in den vom Betreiber vorgegebenen
                  Dateiformaten, Formatierungen, Bild- und Dateigrößen zur
                  Verfügung zu stellen und ihm die hierfür erforderlichen
                  Nutzungsrechte einzuräumen. Für die Beschaffung und den
                  Rechteerwerb an diesen Inhalten ist allein der Kunde
                  verantwortlich. Der Kunde erklärt und übernimmt die
                  Verantwortung dafür, dass er das Recht besitzt, die dem
                  Verkäufer überlassenen Inhalte zu nutzen. Er trägt
                  insbesondere dafür Sorge, dass hierdurch keine Rechte Dritter
                  verletzt werden, insbesondere Urheber-, Marken- und
                  Persönlichkeitsrechte.
                  <br />
                  <br />
                  <br />
                  9.2 Der Kunde stellt den Verkäufer von Ansprüchen Dritter
                  frei, die diese im Zusammenhang mit einer Verletzung ihrer
                  Rechte durch die vertragsgemäße Nutzung der Inhalte des Kunden
                  durch den Verkäufer diesem gegenüber geltend machen können.
                  Der Kunde übernimmt hierbei auch die angemessenen Kosten der
                  notwendigen Rechtsverteidigung einschließlich aller Gerichts-
                  und Anwaltskosten in gesetzlicher Höhe. Dies gilt nicht, wenn
                  die Rechtsverletzung vom Kunden nicht zu vertreten ist. Der
                  Kunde ist verpflichtet, dem Verkäufer im Falle einer
                  Inanspruchnahme durch Dritte unverzüglich, wahrheitsgemäß und
                  vollständig alle Informationen zur Verfügung zu stellen, die
                  für die Prüfung der Ansprüche und eine Verteidigung
                  erforderlich sind.
                  <br />
                  <br />
                  <br />
                  9.3 Der Verkäufer behält sich vor, Verarbeitungsaufträge
                  abzulehnen, wenn die vom Kunden hierfür überlassenen Inhalte
                  gegen gesetzliche oder behördliche Verbote oder gegen die
                  guten Sitten verstoßen. Dies gilt insbesondere bei Überlassung
                  verfassungsfeindlicher, rassistischer, fremdenfeindlicher,
                  diskriminierender, beleidigender, Jugend gefährdender und/oder
                  Gewalt verherrlichender Inhalte.
                  <br />
                  <br />
                  <br />
                  10) Besondere Bedingungen für Montage-/Einbauleistungen
                  <br />
                  <br />
                  <br />
                  Schuldet der Verkäufer nach dem Inhalt des Vertrages neben der
                  Warenlieferung auch die Montage bzw. den Einbau der Ware beim
                  Kunden sowie ggf. entsprechende Vorbereitungsmaßnahmen (z. B.
                  Aufmaß), so gilt hierfür Folgendes:
                  <br />
                  <br />
                  <br />
                  10.1 Der Verkäufer erbringt seine Leistungen nach seiner Wahl
                  in eigener Person oder durch qualifiziertes, von ihm
                  ausgewähltes Personal. Dabei kann sich der Verkäufer auch der
                  Leistungen Dritter (Subunternehmer) bedienen, die in seinem
                  Auftrag tätig werden. Sofern sich aus der
                  Leistungsbeschreibung des Verkäufers nichts anderes ergibt,
                  hat der Kunde keinen Anspruch auf Auswahl einer bestimmten
                  Person zur Durchführung der gewünschten Dienstleistung.
                  <br />
                  <br />
                  <br />
                  10.2 Der Kunde hat dem Verkäufer die für die Erbringung der
                  geschuldeten Dienstleistung erforderlichen Informationen
                  vollständig und wahrheitsgemäß zur Verfügung zu stellen,
                  sofern deren Beschaffung nach dem Inhalt des Vertrages nicht
                  in den Pflichtenkreis des Verkäufers fällt.
                  <br />
                  <br />
                  <br />
                  10.3 Der Verkäufer wird sich nach Vertragsschluss mit dem
                  Kunden in Verbindung setzen, um mit diesem einen Termin für
                  die geschuldete Leistung zu vereinbaren. Der Kunde trägt dafür
                  Sorge, dass der Verkäufer bzw. das von diesem beauftragte
                  Personal zum vereinbarten Termin Zugang zu den betreffenden
                  Einrichtungen des Kunden hat.
                  <br />
                  <br />
                  <br />
                  10.4 Die Gefahr des zufälligen Untergangs und der zufälligen
                  Verschlechterung der verkauften Ware geht erst mit der
                  Beendigung der Montagearbeiten und der Übergabe an den Kunden
                  auf den Kunden über.
                  <br />
                  <br />
                  <br />
                  11) Besondere Bedingungen für Reparaturleistungen
                  <br />
                  <br />
                  <br />
                  Schuldet der Verkäufer nach dem Inhalt des Vertrages die
                  Reparatur einer Sache des Kunden, so gilt hierfür Folgendes:
                  <br />
                  <br />
                  <br />
                  11.1 Reparaturleistungen werden am Sitz des Verkäufers
                  erbracht.
                  <br />
                  <br />
                  <br />
                  11.2 Der Verkäufer erbringt seine Leistungen nach seiner Wahl
                  in eigener Person oder durch qualifiziertes, von ihm
                  ausgewähltes Personal. Dabei kann sich der Verkäufer auch der
                  Leistungen Dritter (Subunternehmer) bedienen, die in seinem
                  Auftrag tätig werden. Sofern sich aus der
                  Leistungsbeschreibung des Verkäufers nichts anderes ergibt,
                  hat der Kunde keinen Anspruch auf Auswahl einer bestimmten
                  Person zur Durchführung der gewünschten Dienstleistung.
                  <br />
                  <br />
                  <br />
                  11.3 Der Kunde hat dem Verkäufer alle für die Reparatur der
                  Sache erforderlichen Informationen zur Verfügung zu stellen,
                  sofern deren Beschaffung nach dem Inhalt des Vertrages nicht
                  in den Pflichtenkreis des Verkäufers fällt. Insbesondere hat
                  der Kunde dem Verkäufer eine umfassende Fehlerbeschreibung zu
                  übermitteln und ihm sämtliche Umstände mitzuteilen, die
                  ursächlich für den festgestellten Fehler sein können.
                  <br />
                  <br />
                  <br />
                  11.4 Sofern nicht anders vereinbart, hat der Kunde die zu
                  reparierende Sache auf eigene Kosten und Gefahr an den Sitz
                  des Verkäufers zu versenden. Der Verkäufer empfiehlt dem
                  Kunden hierfür den Abschluss einer Transportversicherung.
                  Ferner empfiehlt der Verkäufer dem Kunden, die Sache in einer
                  geeigneten Transportverpackung zu versenden, um das Risiko von
                  Transportschäden zu reduzieren und den Inhalt der Verpackung
                  zu verbergen. Über offensichtliche Transportschäden wird der
                  Verkäufer den Kunden unverzüglich informieren, damit dieser
                  seine ggf. gegenüber dem Transporteur bestehenden Rechte
                  geltend machen kann.
                  <br />
                  <br />
                  <br />
                  11.5 Die Rücksendung der Sache erfolgt auf Kosten des Kunden.
                  Die Gefahr des zufälligen Untergangs und der zufälligen
                  Verschlechterung der Sache geht mit der Übergabe der Sache an
                  eine geeignete Transportperson am Geschäftssitz des Verkäufers
                  auf den Kunden über. Auf Wunsch des Kunden wird der Verkäufer
                  für die Sache eine Transportversicherung abschließen.
                  <br />
                  <br />
                  <br />
                  11.6 Der Kunde kann die zu reparierende Sache auch selbst an
                  den Sitz des Verkäufers verbringen und wieder von diesem
                  abholen, wenn sich dies aus der Leistungsbeschreibung des
                  Verkäufers ergibt oder wenn die Parteien hierüber eine
                  entsprechende Vereinbarung getroffen haben. In diesem Fall
                  gelten die vorstehenden Regelungen zur Kosten- und
                  Gefahrtragung bei Versand und Rückversand der Sache
                  entsprechend.
                  <br />
                  <br />
                  <br />
                  11.7 Die vorgenannten Regelungen beschränken nicht die
                  gesetzlichen Mängelrechte des Kunden im Falle des Kaufs einer
                  Ware vom Verkäufer.
                  <br />
                  <br />
                  <br />
                  11.8 Für Mängel der erbrachten Reparaturleistung haftet der
                  Verkäufer nach den Vorschriften der gesetzlichen
                  Mängelhaftung.
                  <br />
                  <br />
                  <br />
                  12) Einlösung von Aktionsgutscheinen
                  <br />
                  <br />
                  <br />
                  12.1 Gutscheine, die vom Verkäufer im Rahmen von Werbeaktionen
                  mit einer bestimmten Gültigkeitsdauer unentgeltlich ausgegeben
                  werden und die vom Kunden nicht käuflich erworben werden
                  können (nachfolgend &quot;Aktionsgutscheine&quot;), können nur
                  im Online-Shop des Verkäufers und nur im angegebenen Zeitraum
                  eingelöst werden.
                  <br />
                  <br />
                  <br />
                  12.2 Einzelne Produkte können von der Gutscheinaktion
                  ausgeschlossen sein, sofern sich eine entsprechende
                  Einschränkung aus dem Inhalt des Aktionsgutscheins ergibt.
                  <br />
                  <br />
                  <br />
                  12.3 Aktionsgutscheine können nur vor Abschluss des
                  Bestellvorgangs eingelöst werden. Eine nachträgliche
                  Verrechnung ist nicht möglich.
                  <br />
                  <br />
                  <br />
                  12.4 Pro Bestellung kann immer nur ein Aktionsgutschein
                  eingelöst werden.
                  <br />
                  <br />
                  <br />
                  12.5 Der Warenwert muss mindestens dem Betrag des
                  Aktionsgutscheins entsprechen. Etwaiges Restguthaben wird vom
                  Verkäufer nicht erstattet.
                  <br />
                  <br />
                  <br />
                  12.6 Reicht der Wert des Aktionsgutscheins zur Deckung der
                  Bestellung nicht aus, kann zur Begleichung des
                  Differenzbetrages eine der übrigen vom Verkäufer angebotenen
                  Zahlungsarten gewählt werden.
                  <br />
                  <br />
                  <br />
                  12.7 Das Guthaben eines Aktionsgutscheins wird weder in
                  Bargeld ausgezahlt noch verzinst.
                  <br />
                  <br />
                  <br />
                  12.8 Der Aktionsgutschein wird nicht erstattet, wenn der Kunde
                  die mit dem Aktionsgutschein ganz oder teilweise bezahlte Ware
                  im Rahmen seines gesetzlichen Widerrufsrechts zurückgibt.
                  <br />
                  <br />
                  <br />
                  <br />
                  12.9 Der Aktionsgutschein ist übertragbar. Der Verkäufer kann
                  mit befreiender Wirkung an den jeweiligen Inhaber, der den
                  Aktionsgutschein im Online-Shop des Verkäufers einlöst,
                  leisten. Dies gilt nicht, wenn der Verkäufer Kenntnis oder
                  grob fahrlässige Unkenntnis von der Nichtberechtigung, der
                  Geschäftsunfähigkeit oder der fehlenden
                  Vertretungsberechtigung des jeweiligen Inhabers hat.
                  <br />
                  <br />
                  <br />
                  13) Einlösung von Geschenkgutscheinen
                  <br />
                  <br />
                  <br />
                  13.1 Gutscheine, die über den Online-Shop des Verkäufers
                  käuflich erworben werden können (nachfolgend
                  &quot;Geschenkgutscheine&quot;), können nur im Online-Shop des
                  Verkäufers eingelöst werden, sofern sich aus dem Gutschein
                  nichts anderes ergibt.
                  <br />
                  <br />
                  <br />
                  13.2 Geschenkgutscheine und Restguthaben von
                  Geschenkgutscheinen sind bis zum Ende des dritten Jahres nach
                  dem Jahr des Gutscheinkaufs einlösbar. Restguthaben werden dem
                  Kunden bis zum Ablaufdatum gutgeschrieben.
                  <br />
                  <br />
                  <br />
                  13.3 Geschenkgutscheine können nur vor Abschluss des
                  Bestellvorgangs eingelöst werden. Eine nachträgliche
                  Verrechnung ist nicht möglich.
                  <br />
                  <br />
                  <br />
                  13.4 Pro Bestellung kann immer nur ein Geschenkgutschein
                  eingelöst werden.
                  <br />
                  <br />
                  <br />
                  13.5 Geschenkgutscheine können nur für den Kauf von Waren und
                  nicht für den Kauf von weiteren Geschenkgutscheinen verwendet
                  werden.
                  <br />
                  <br />
                  <br />
                  13.6 Reicht der Wert des Geschenkgutscheins zur Deckung der
                  Bestellung nicht aus, kann zur Begleichung des
                  Differenzbetrages eine der übrigen vom Verkäufer angebotenen
                  Zahlungsarten gewählt werden.
                  <br />
                  <br />
                  <br />
                  13.7 Das Guthaben eines Geschenkgutscheins wird weder in
                  Bargeld ausgezahlt noch verzinst.
                  <br />
                  <br />
                  <br />
                  13.8 Der Geschenkgutschein ist übertragbar. Der Verkäufer kann
                  mit befreiender Wirkung an den jeweiligen Inhaber, der den
                  Geschenkgutschein im Online-Shop des Verkäufers einlöst,
                  leisten. Dies gilt nicht, wenn der Verkäufer Kenntnis oder
                  grob fahrlässige Unkenntnis von der Nichtberechtigung, der
                  Geschäftsunfähigkeit oder der fehlenden
                  Vertretungsberechtigung des jeweiligen Inhabers hat.
                  <br />
                  <br />
                  <br />
                  14) Anwendbares Recht
                  <br />
                  <br />
                  <br />
                  Für sämtliche Rechtsbeziehungen der Parteien gilt das Recht
                  der Bundesrepublik Deutschland unter Ausschluss der Gesetze
                  über den internationalen Kauf beweglicher Waren. Bei
                  Verbrauchern gilt diese Rechtswahl nur insoweit, als nicht der
                  gewährte Schutz durch zwingende Bestimmungen des Rechts des
                  Staates, in dem der Verbraucher seinen gewöhnlichen Aufenthalt
                  hat, entzogen wird.
                  <br />
                  <br />
                  <br />
                  15) Alternative Streitbeilegung
                  <br />
                  <br />
                  <br />
                  15.1 Die EU-Kommission stellt im Internet unter folgendem Link
                  eine Plattform zur Online-Streitbeilegung bereit:
                  https://ec.europa.eu/consumers/odr
                  <br />
                  <br />
                  <br />
                  Diese Plattform dient als Anlaufstelle zur außergerichtlichen
                  Beilegung von Streitigkeiten aus Online-Kauf- oder
                  Dienstleistungsverträgen, an denen ein Verbraucher beteiligt
                  ist.
                  <br />
                  <br />
                  <br />
                  15.2 Der Verkäufer ist zur Teilnahme an einem
                  Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
                  <br />
                  <br />
                  <br />
                  Björn Seibert · BE-SCooTER® ...FUNsport erFAHREN! Rodheimer
                  Str. 126 · 35452 Heuchelheim · Deutschland
                  <br />
                  <br />
                  <br />
                  Tel.: 0641 / 93923404
                  <br />
                  Fax: 0641 / 93923402
                  <br />
                  E-Mail: info@be-scooter.de
                  <br />
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div id="Cookie-Einstellungen" key={3} className="container rounded-md ">
        <button
          onClick={() => toggleExpand(3)}
          className="mt-20 flex w-full items-center justify-between  px-6 py-4 text-lg font-medium text-gray-800"
        >
          <span className="leading-title text-left text-2xl font-semibold md:text-3xl">
            COOKIE-EINSTELLUNGEN
          </span>
          <motion.span
            className="flex h-12 w-12 items-center justify-center"
            initial={{ rotate: 0 }}
            animate={{ rotate: expandedSectionIndex === 3 ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {expandedSectionIndex === 3 ? (
              <FiMinus className="rotate-90" />
            ) : (
              <FiPlus />
            )}
          </motion.span>
        </button>
        <AnimatePresence>
          {expandedSectionIndex === 3 && (
            <motion.div
              key="content"
              className="p-6 text-gray-700"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="relative h-60 w-full object-cover">
                <Image
                  src={cookie}
                  alt="Title 1"
                  layout="fill"
                  priority={true}
                />
              </div>
              <div className="flex flex-col justify-center">
                <p>
                  <br />
                  FUNKTIOINELL: <br />
                  <br />
                  Funktionelle Cookies ermöglichen dieser Website, bestimmte
                  Funktionen zur Verfügung zu stellen und Informationen zu
                  speichern, die vom Nutzer eingegeben wurden – beispielsweise
                  bereits registrierte Namen oder die Sprachauswahl. Damit
                  werden verbesserte und personalisierte Funktionen
                  gewährleistet.
                  <br />
                  <br />
                  Youtube <br />
                  <br />
                  Diese Cookies sind Teil von eingebetteten YouTube-Videos. Sie
                  erheben anonymisierte statistische Daten – z. B. wie oft ein
                  Video abgespielt wird und welche Einstellungen dabei verwendet
                  werden. Dabei werden keine sensiblen Daten gesammelt, außer
                  der Nutzer ist in sein Google-Konto eingeloggt. In diesem Fall
                  werden ihre Aktionen ihrem Konto zugeordnet – beispielsweise
                  wenn sie auf den &quot;Mag ich&quot;-Button klicken. Mehr
                  Informationen dazu finden sich in der
                  Google-Datenschutzerklärung. Anbieter: Google LLC, 1600
                  Amphitheatre Parkway, Mountain View, CA 94043, USA oder von
                  Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
                  Irland, wenn Sie in der EU ansässig sind. Cookie-Namen und
                  Lebensdauer: YSC (gültig für eine Sitzung), secure-HSID
                  (Lebensdauer: 2 Monate), Secure-SSID (Lebensdauer: 2 Monate),
                  Secure-APSID (Lebensdauer: 2 Monate), VISITORINFO1LIVE
                  (Lebensdauer: 5 Monate), SIDCC (Lebensdauer: 1 Jahr),
                  LOGIN_INFO(Lebensdauer: 2 Jahre), PREF (Lebensdauer: 2 Jahre),
                  SID (Lebensdauer: 2 Jahre), _Secure-3PSID (Lebensdauer: 2
                  Jahre), HSID (Lebensdauer: 2 Jahre), SSID (Lebensdauer: 2
                  Jahre), APISID (Lebensdauer: 2 Jahre), SAPISID (Lebensdauer: 2
                  Jahre), _Secure-3PAPISID (Lebensdauer: 2 Jahre), Consent
                  (Lebensdauer: 28 Jahre).
                  <br />
                  <br />
                  <br />
                  Google Maps <br />
                  <br />
                  Diese Cookies sind Teil von Google Maps. Anbieter: Google LLC,
                  1600 Amphitheatre Parkway, Mountain View, CA 94043, USA oder
                  Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
                  wenn Sie in der EU ansässig sind. Cookie-Namen und
                  Lebensdauer: UULE (Lebensdauer: 1 Tag), OTZ (Lebensdauer: 2
                  Wochen), 1P_JAR (Lebensdauer: 1 Monat), SIDCC (Lebensdauer: 1
                  Jahr), _Secure-3PAPISID (Lebensdauer: 2 Jahre), _Secure-APSID
                  (Lebensdauer: 2 Monate), _Secure-SSID (Lebensdauer: 2 Jahre),
                  HSID (Lebensdauer: 2 Jahre), _Secure-3PSID (Lebensdauer: 2
                  Jahre), ANID (Lebensdauer: 1 Jahr), SID (Lebensdauer: 2 Jahre)
                  APISID (Lebensdauer: 2 Jahre), _Secure-HSID (Lebensdauer: 2
                  Monate), SAPISID (Lebensdauer: 2 Jahre), NID (Lebensdauer: 6
                  Monate)
                  <br />
                  <br />
                  -----------------------------------------------------------------------------
                  <br />
                  PERFORMANCE
                  <br />
                  Google Analytics
                  <br />
                  <br />
                  Diese Cookies sammeln anonymisierte Informationen zu
                  Analysezwecken – z. B. wie Besucher die Website nutzen und mit
                  ihr interagieren. Anbieter: Google LLC, 1600 Amphitheatre
                  Parkway, Mountain View, CA 94043, USA oder Google Ireland
                  Limited, Gordon House, Barrow Street, Dublin 4, Irland, wenn
                  Sie in der EU ansässig sind. Cookie-Namen:_ga, _gat und_gid)
                  Cookie-Lebensdauer: 2 Jahre
                  <br />
                  <br />
                  -----------------------------------------------------------------------------
                  <br />
                  MARKETING / THIRD-PARTY
                  <br />
                  <br />
                  Facebook
                  <br />
                  <br />
                  Das _fbp-Cookie ist ein Facebook-Pixel-Cookie, das die
                  Browserinformationen speichert und den Browser zum Zwecke der
                  Anmeldeauthentifizierung identifiziert. Das _fbc-Cookie ist
                  ein Klick-Id-Cookie, das die Abfrageparameter für die
                  Website-Domain speichert, auf welcher der Website-Besucher auf
                  eine Anzeige auf Facebook geklickt hat und dann auf dieser
                  Ziel-Website landet, auf der das Facebook-Pixel aktiviert
                  wurde. Provider: Facebook Inc, 1 Hacker Way, Menlo Park, CA
                  94025, USA, oder, wenn Sie in der EU ansässig sind, Facebook
                  Ireland Ltd, 4 Grand Canal Square, Grand Canal Harbour, Dublin
                  2, Irland Cookie-Namen und Lebenszeiten: _fbp (Lebensdauer: 2
                  Jahre), _fbc(Lebensdauer: 2 Jahre)
                  <br />
                  <br />
                  <Link
                    href="/info"
                    className="text-lg underline hover:bg-slate-100 hover:bg-opacity-50 hover:text-slate-900"
                  >
                    Cookie-Einstellungen
                  </Link>
                  <br />
                  <Link
                    href="/info"
                    className="text-lg underline hover:bg-slate-100 hover:bg-opacity-50 hover:text-slate-900"
                  >
                    Datenschutzeklärung
                  </Link>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div key={4} className="container rounded-md ">
        <button
          onClick={() => toggleExpand(4)}
          className="mt-20 flex w-full items-center justify-between  px-6 py-4 text-lg font-medium text-gray-800"
        >
          <span className="leading-title text-left text-2xl font-semibold md:text-3xl">
            HAFTUNG
          </span>
          <motion.span
            className="flex h-12 w-12 items-center justify-center"
            initial={{ rotate: 0 }}
            animate={{ rotate: expandedSectionIndex === 4 ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {expandedSectionIndex === 4 ? (
              <FiMinus className="rotate-90" />
            ) : (
              <FiPlus />
            )}
          </motion.span>
        </button>
        <AnimatePresence>
          {expandedSectionIndex === 4 && (
            <motion.div
              key="content"
              className="p-6 text-gray-700"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="relative h-60 w-full object-cover">
                <Image
                  src={Haftung}
                  alt="Title 1"
                  layout="fill"
                  priority={true}
                />
              </div>
              <div className="flex flex-col justify-center">
                <p>
                  <br />
                  Hinweis zur Straßenverkehrsordnung (StVO) /
                  Straßenverkehrs-Zulassungs-Ordnung (StVZO) und
                  Haftungsausschluss:
                  <br />
                  <br />
                  Wir weisen ausdrücklich darauf hin, dass von BE-SCooTER®
                  angegebene Produkte unter Umständen nur im privaten,
                  abgeschlossenen <br />
                  Bereich genutzt werden dürfen, wie zum Beispiel etwa für
                  Sport- und Werbezwecke.
                  <br />
                  <br />
                  Bitte fahren Sie immer vorsichtig, nutzen Sie Schutzkleidung
                  wie Helme oder auch Protektoren und bringen sich und andere
                  nicht in <br />
                  Gefahr. Sprechen Sie vorab mit Ihrer Versicherung, so dass
                  alle Bereiche Ihres Handelns geschützt sind. Bitte bedenken
                  Sie
                  <br /> weiterhin, dass in anderen Ländern andere gesetzliche
                  Bestimmungen gelten. Dieses gilt vor allem dann, wenn Sie mit
                  dem E Scooter <br />
                  in den Urlaub fahren.
                  <br />
                  Bitte informieren Sie sich vorher darüber und halten Sie sich
                  grundsätzlich immer daran.
                  <br />
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div key={5} className="container rounded-md  ">
        <button
          onClick={() => toggleExpand(5)}
          className="mt-20 flex w-full items-center justify-between  px-6 py-4 text-lg font-medium text-gray-800"
        >
          <span className="leading-title text-left text-2xl font-semibold md:text-3xl">
            WIDERRUFSRECHT
          </span>
          <motion.span
            className="flex h-12 w-12 items-center justify-center"
            initial={{ rotate: 0 }}
            animate={{ rotate: expandedSectionIndex === 5 ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {expandedSectionIndex === 5 ? (
              <FiMinus className="rotate-90" />
            ) : (
              <FiPlus />
            )}
          </motion.span>
        </button>
        <AnimatePresence>
          {expandedSectionIndex === 5 && (
            <motion.div
              key="content"
              className="p-6 text-gray-700"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="relative h-60 w-full object-cover">
                <Image
                  src={Widderufrecht}
                  alt="Title 1"
                  layout="fill"
                  priority={true}
                />
              </div>
              
              <div className="flex flex-col justify-center">
                <p>
                  <br />
                  Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von
                  Gründen diesen Vertrag zu widerrufen.
                  <br />
                  Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des
                  Vertragsabschlusses.
                  <br />
                  Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (BE-SCooTER®,
                  Inhaber: Björn Seibert, Rodheimer Str. 126, 35452 Heuchelheim,{' '}
                  <br />
                  Deutschland, Tel.: 0641 / 93923404, Fax: 0641 / 93923402,
                  E-Mail: info@be-scooter.de) mittels einer eindeutigen
                  Erklärung (z. B.
                  <br /> ein mit der Post versandter Brief, Telefax oder E-Mail)
                  über Ihren Entschluss, diesen Vertrag zu widerrufen,
                  informieren.
                  <br />
                  <br />
                  Sie können dafür das beigefügte Muster-Widerrufsformular
                  verwenden, das jedoch nicht vorgeschrieben ist.
                  <br />
                  <br />
                  Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die
                  Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf
                  der <br />
                  Widerrufsfrist absenden.
                  <br />
                  <br />
                  <br />
                  Folgen des Widerrufs
                  <br />
                  <br />
                  Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle
                  Zahlungen, die wir von Ihnen erhalten haben, einschließlich
                  der <br />
                  Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich
                  daraus ergeben, dass Sie eine andere Art der Lieferung als die
                  von <br />
                  uns angebotene, günstigste Standardlieferung gewählt haben),
                  unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag{' '}
                  <br />
                  zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf
                  dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung
                  verwenden wir dasselbe Zahlungsmittel, das Sie bei der
                  ursprünglichen Transaktion eingesetzt haben, es sei denn, mit
                  Ihnen wurde
                  <br /> ausdrücklich etwas anderes vereinbart; in keinem Fall
                  werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.
                  <br />
                  <br />
                  Haben Sie verlangt, dass die Dienstleistungen während der
                  Widerrufsfrist beginnen sollen, so haben Sie uns einen
                  angemessenen <br />
                  Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu
                  dem Sie uns von der Ausübung des Widerrufsrechts
                  <br /> hinsichtlich dieses Vertrags unterrichten, bereits
                  erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der{' '}
                  <br />
                  im Vertrag vorgesehenen Dienstleistungen entspricht.
                  <br />
                  <br />
                  Quelle: Rechtsanwalt Metzler
                  <br />
                  <br />
                  _________________________________________________
                  <br />
                  <br />
                  <br />
                  <br />
                  Das beizufügende Muster-Widerrufsformular:
                  <br />
                  <br />
                  Muster Widerrufsformular
                  <br />
                  <br />
                  (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte
                  dieses Formular aus und senden Sie es zurück.)
                  <br />
                  <br />
                  <br />
                  <br />
                  An:
                  <br />
                  <br />
                  <br />
                  BE-SCooTER,
                  <br />
                  <br />
                  Inhaber: Björn Seibert
                  <br />
                  BE-SCooTER® ...FUNsport erFAHREN!
                  <br />
                  Rodheimer Str. 126
                  <br />
                  35452 Heuchelheim
                  <br />
                  Deutschland
                  <br />
                  <br />
                  <br />
                  Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*)
                  abgeschlossenen Vertrag
                  <br />
                  <br />
                  über den Kauf der folgenden Waren (*)/die Erbringung der
                  folgenden Dienstleistung (*)
                  <br />
                  <br />
                  <br />
                  Bestellt am (*)/erhalten am (*)
                  <br />
                  <br />
                  <br />
                  Name des/der Verbraucher(s)
                  <br />
                  <br />
                  <br />
                  Anschrift des/der Verbraucher(s)
                  <br />
                  <br />
                  <br />
                  Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf
                  Papier)
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  Datum
                  <br />
                  <br />
                  ___________
                  <br />
                  (*) Unzutreffendes streichen.
                  <br />
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div key={6} className="container rounded-md  ">
        <button
          onClick={() => toggleExpand(6)}
          className="mt-20 flex w-full items-center justify-between  px-6 py-4 text-lg font-medium text-gray-800"
        >
          <span className="leading-title text-left text-xl font-semibold md:text-3xl">
            LADEHINWEIS FÜR AKKUS
          </span>
          <motion.span
            className="flex h-12 w-12 items-center justify-center"
            initial={{ rotate: 0 }}
            animate={{ rotate: expandedSectionIndex === 6 ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {expandedSectionIndex === 6 ? (
              <FiMinus className="rotate-90" />
            ) : (
              <FiPlus />
            )}
          </motion.span>
        </button>
        <AnimatePresence>
          {expandedSectionIndex === 6 && (
            <motion.div
              key="content"
              className="p-6 text-gray-700"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="relative h-60 w-full object-cover">
                <Image
                  src={Ladenhinweis}
                  alt="Title 1"
                  layout="fill"
                  priority={true}
                />
              </div>
              <div className="flex flex-col justify-center">
                <p>
                  <br />
                  Die Wartung und Pflege der Akkus ist ein entscheidendes
                  Kriterium zur Lebensdauer Ihrer Batterien. Durch falsche{' '}
                  <br />
                  Wartung, Pflege und Ladeverhalten kann sich diese stark
                  reduzieren, bis hin zu irreparablen Schäden und <br />
                  zum frühzeitigen Totalausfall der Akkus.
                  <br />
                  <br />
                  Bleiakkus
                  <br />
                  <br />
                  Bleiakkus sollten niemals tiefentladen werden, sondern stets
                  unter möglichst hoher Spannung betrieben werden. Durch
                  völliges <br />
                  “Leerfahren” oder durch lange Lagerung ohne Aufladen (wie z.B.
                  über den Winter) tiefentladene Bleiakkus, lässt diese <br />
                  sulfatieren und beschädigt die Zellen. Dieser Prozess ist in
                  vielen Fällen nicht wieder umzukehren und führt zum <br />
                  Totalausfall des Akkus.
                  <br />
                  <br />
                  Denken Sie nicht Sie “verschwenden” viele Ladezyklen, indem
                  Sie den Bleiakku öfter nachladen, obwohl dieser nicht
                  “leergefahren”
                  <br /> ist – dies ist völlig falsch! Bei der angegebenen
                  Lebensdauer in Ladezyklen sind sog. Vollzyklen gemeint. Das
                  heißt,
                  <br /> wenn Sie Ihren Akku 50% entladen und dann wieder voll
                  aufladen, so entspricht dies ½ Ladezyklus. Zweimal aufladen
                  <br /> bedeutet dementsprechend einem Vollzyklus.
                  <br />
                  <br />
                  Wir empfehlen deshalb das Nachladen der Akkus ab einer
                  Entladung von 25%. Dann aber immer solange, bis das Ladegerät
                  den <br />
                  Ladevorgang vollständig abgeschlossen hat. So gewährleisten
                  sie eine höchstmögliche Spannung der Zellen.
                  <br />
                  <br />
                  <br />
                  Während der Überwinterung oder einer langen Lagerung von
                  Fahrzeugen mit Bleiakkus ist es zwingend notwendig, diese
                  mindestens <br />
                  einmal im Monat nachzuladen bis der Ladevorgang vollständig
                  abgeschlossen ist.
                  <br />
                  <br />
                  <br />
                  Lithiumakkus
                  <br />
                  <br />
                  Lithiumakkus sollten niemals tiefentladen werden, dies
                  beschädigt die Lithiumzellen irreparabel. Alle Lithiumakkus
                  sollten (falls
                  <br /> möglich) stets bei mittlerer Ladung gelagert werden.
                  Wird ein Akku über längere Zeit nicht benötigt, bitte diesen
                  <br /> nicht vorher voll aufladen – dies versetzt die
                  Lithiumzellen in unnötigen „Stress“ was langfristig zu einer{' '}
                  <br />
                  verkürzten Lebensdauer führen kann. Wenn man bei der Benutzung
                  des Akkus die Wahl hat, empfehlen wir diesen prinzipiell nicht{' '}
                  <br />
                  vollständig aufzuladen, sondern immer im mittleren
                  Spannungsbereich zu nutzen. Selbstverständlich kann der Akku
                  aber <br />
                  voll aufgeladen werden, um beispielsweise lange Strecken zu
                  fahren – es ist nur technisch gesehen für einen Lithiumakku
                  das <br />
                  Beste, dies nicht zu tun um wirklich das Maximum an
                  Performance und Lebensdauer aus dem Akku herausholen zu
                  können.
                  <br />
                  <br />
                  Die Lebensdauer von Lithiumakkus wird in Ladezyklen angegeben.
                  Denken Sie nicht, Sie “verschwenden” viele Ladezyklen, indem
                  Sie
                  <br /> den Lithiumakku öfter nachladen, obwohl dieser nicht
                  “leergefahren” ist – dies ist völlig falsch! Bei der <br />
                  angegebenen Lebensdauer in Ladezyklen sind sog. Vollzyklen
                  gemeint. Das heißt, wenn Sie Ihren Akku 50% entladen und{' '}
                  <br />
                  dann wieder voll aufladen, so entspricht dies ½ Ladezyklus.
                  Zweimal aufladen dementsprechend einem Vollzyklus.
                  <br />
                  <br />
                  Wir empfehlen das Nachladen eines Lithiumakkus bei 25%iger
                  Restladung bis zu ca. 75% Ladezustand. Für lange Strecken kann
                  der <br />
                  Akku aber selbstverständlich auch voll aufgeladen werden –
                  siehe oben.
                  <br />
                  <br />
                  Während der Überwinterung oder langer Lagerung von Fahrzeugen
                  mit Lithiumakkus ist es zwingend notwendig, diese mindestens
                  einmal <br />
                  im Monat bis ca. 60% nachzuladen.
                  <br />
                  <br />
                  Für Lithiumakkus nur die vom Hersteller zugelassenen und
                  empfohlenen Ladegeräte verwenden. Aufladen mit zu hohem
                  Ladestrom um <br />
                  schneller aufladen zu können, kann die Lithiumzellen
                  irreparabel beschädigen und im schlimmsten Fall bis zum Brand
                  führen.
                  <br />
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div key={7} className="container mb-10 rounded-md ">
        <button
          onClick={() => toggleExpand(7)}
          className="mt-20 flex w-full items-center justify-between  px-6 py-4 text-lg font-medium text-gray-800"
        >
          <span className="leading-title text-left text-2xl font-semibold md:text-3xl">
            INFORMATIONEN ZUR BATTERIEVERORDNUNG
          </span>
          <motion.span
            className="flex h-12 w-12 items-center justify-center"
            initial={{ rotate: 0 }}
            animate={{ rotate: expandedSectionIndex === 7 ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {expandedSectionIndex === 7 ? (
              <FiMinus className="rotate-90" />
            ) : (
              <FiPlus />
            )}
          </motion.span>
        </button>
        <AnimatePresence>
          {expandedSectionIndex === 7 && (
            <motion.div
              key="content"
              className="p-6 text-gray-700"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              
              <div className="relative h-60 w-full object-cover">
                <Image
                  src={Batterie}
                  alt="Title 1"
                  layout="fill"
                  priority={true}
                />
              </div>
              <div className="flex flex-col justify-center">
                <p>
                  <br />
                  Im Zusammenhang mit dem Vertrieb von Batterien oder mit der
                  Lieferung von Geräten, die Batterien enthalten, sind <br />
                  wir verpflichtet, Sie auf folgendes hinzuweisen:
                  <br />
                  <br />
                  Sie sind zur Rückgabe gebrauchter Batterien als Endnutzer
                  gesetzlich verpflichtet. Sie können Altbatterien, die wir als{' '}
                  <br />
                  Neubatterien im Sortiment führen oder geführt haben,
                  unentgeltlich an unserem Versandlager (Versandadresse)
                  zurückgeben. Die auf <br />
                  den Batterien abgebildeten Symbole haben folgende Bedeutung:
                  Das Symbol der durchgekreuzten Mülltonne bedeutet, dass die{' '}
                  <br />
                  Batterie nicht in den Hausmüll gegeben werden darf. <br />
                  Bei Batterien, die Schadstoffe enthalten, befinden sich in der
                  Nähe des Mülltonnensymbol die chemischen Symbole der
                  Schadstoffe. <br />
                  Dabei steht: <br />
                  Pb = Batterie enthält mehr als 0,004 Masseprozent <br />
                  Blei Cd = Batterie enthält mehr als 0,002 Masseprozent Cadmium
                  Hg = Batterie enthält mehr als 0,0005 Masseprozent
                  Quecksilber.
                  <br />
                  <br />
                  Rückgabeort / Versandadresse :<br />
                  <br />
                  BE-SCooTER®
                  <br />
                  Rodheimer Str. 126
                  <br />
                  35452 Heuchelheim
                  <br />
                  <br />
                  Telefon 0641 93923404
                  <br />
                  info@be-scooter.de
                  <br />
                  <br />
                  Altbatterien können alternativ auch kostenlos bei Wertstoff-,
                  Recyclinghöfen oder kommunalen Sammelstellen abgegeben werden.
                  Eine <br />
                  Rücksendung der Altbatterie per Post ist aufgrund der
                  Gefahrgutverordnung nicht zulässig. Bitte beachten Sie die{' '}
                  <br />
                  vorstehenden Hinweise. <br />
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
