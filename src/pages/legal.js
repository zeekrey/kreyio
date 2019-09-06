/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { React, useState } from "react"
import { Link } from "gatsby"
import Header from "../components/Header.js"

export default () => {
  const breakpoints = [576, 768, 992, 1200]
  const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)
  return (
    <div style={{ fontFamily: "Open Sans", fontSize: "0.9rem" }}>
      <Header />
      <div>
        <div
          css={css`
            text-align: center;
            font-size: 2.4rem;
            ${[mq[0]]} {
              font-size: 2.6rem;
            }
            ${[mq[1]]} {
              font-size: 4.6rem;
            }
            ${[mq[2]]} {
              font-size: 5.6rem;
            }
            ${[mq[3]]} {
              font-size: 7.6rem;
            }
            font-family: Fugaz One, cursive;
          `}
        >
          LEGAL
        </div>
        <div
          css={css`
            margin: 2rem 4rem;
            ${[mq[0]]} {
              margin: 2rem 5rem;
            }
            ${[mq[1]]} {
              margin: 2rem 6rem;
            }
            ${[mq[2]]} {
              margin: 2rem 7rem;
            }
            ${[mq[3]]} {
              margin: 2rem 8rem;
            }
          `}
        >
          <h1>Impressum</h1>
          <p>
            Christian Krey
            <br />
            Benedekring 6
            <br />
            D-04159 Leipzig
          </p>
          <p>EMail: hi@krey.io</p>
          <p>Inhaltlich Verantwortlich: Christian Krey (Anschrift s.o.)</p>
          <br />
          <h1>Datenschutzerklärung</h1>
          <h2>Einleitung</h2>
          <p>
            Mit der folgenden Datenschutzerklärung möchten ich Sie darüber
            aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend
            auch kurz als "Daten“ bezeichnet) ich zu welchen Zwecken und in
            welchem Umfang verarbeite. Die Datenschutzerklärung gilt für alle
            von mir durchgeführten Verarbeitungen personenbezogener Daten,
            sowohl im Rahmen der Erbringung meiner Leistungen als auch
            insbesondere auf meinen Webseiten, in mobilen Applikationen sowie
            innerhalb externer Onlinepräsenzen, wie z.B. meiner
            Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als
            "Onlineangebot“).
          </p>
          <ul></ul>
          <p>
            Stand: 5. September 2019
            <h2>Inhaltsübersicht</h2>
            <ul>
              <li>
                <a href="#m14">Einleitung</a>
              </li>
              <li>
                <a href="#m3">Verantwortlicher</a>
              </li>
              <li>
                <a href="#mOverview">Übersicht der Verarbeitungen</a>
              </li>
              <li>
                <a href="#m13">Maßgebliche Rechtsgrundlagen</a>
              </li>
              <li>
                <a href="#m27"> Sicherheitsmaßnahmen</a>
              </li>
              <li>
                <a href="#m134"> Einsatz von Cookies</a>
              </li>
              <li>
                <a href="#m104"> Blogs und Publikationsmedien</a>
              </li>
              <li>
                <a href="#m225">
                  Bereitstellung des Onlineangebotes und Webhosting
                </a>
              </li>
              <li>
                <a href="#m264"> Onlinemarketing</a>
              </li>
              <li>
                <a href="#m15">
                  Änderung und Aktualisierung der Datenschutzerklärung
                </a>
              </li>
              <li>
                <a href="#m10"> Rechte der betroffenen Personen</a>
              </li>
            </ul>
            <h2 id="m3">Verantwortlicher</h2>
            <p>
              Christian Krey
              <br />
              Benedekring 6
              <br />
              D-04159 Leipzig
            </p>
            <p>E-Mail-Adresse: hi@krey.io</p>
            <ul></ul>
            <h2 id="mOverview">Übersicht der Verarbeitungen</h2>
            <p>
              Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten
              und die Zwecke ihrer Verarbeitung zusammen und verweist auf die
              betroffenen Personen.
            </p>
            <h3>Arten der verarbeiteten Daten</h3>
            <ul>
              <li>
                <p>Name.</p>
              </li>
              <li>
                <p>Kontaktdaten (z.B. E-Mail, Telefonnummern).</p>
              </li>
              <li>
                <p>
                  Meta-/Kommunikationsdaten (z.B. Geräte-Informationen,
                  IP-Adressen).
                </p>
              </li>
              <li>
                <p>
                  Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten,
                  Zugriffszeiten).
                </p>
              </li>
            </ul>
            <h3>Kategorien betroffener Personen</h3>
            <ul>
              <li>
                <p>Interessenten.</p>
              </li>
              <li>
                <p>
                  Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).
                </p>
              </li>
            </ul>
            <h3>Zwecke der Verarbeitung</h3>
            <ul>
              <li>
                <p>Besuchsaktionsauswertung.</p>
              </li>
              <li>
                <p>Content Delivery Network (CDN).</p>
              </li>
              <li>
                <p>Interessenbasiertes und verhaltensbezogenes Marketing.</p>
              </li>
              <li>
                <p>
                  Konversionsmessung (Messung der Effektivität von
                  Marketingmaßnahmen).
                </p>
              </li>
              <li>
                <p>Profiling (Erstellen von Nutzerprofilen).</p>
              </li>
              <li>
                <p>Remarketing.</p>
              </li>
              <li>
                <p>
                  Reichweitenmessung (z.B. Zugriffsstatistiken, Erkennung
                  wiederkehrender Besucher).
                </p>
              </li>
              <li>
                <p>
                  Tracking (z.B. interessens-/verhaltensbezogenes Profiling,
                  Nutzung von Cookies).
                </p>
              </li>
              <li>
                <p>Vertragliche Leistungen und Service.</p>
              </li>
            </ul>
            <h2></h2>
            <h3 id="m13">Maßgebliche Rechtsgrundlagen</h3>
            <p>
              Im Folgenden teile ich die Rechtsgrundlagen der
              Datenschutzgrundverordnung (DSGVO), auf deren Basis ich die
              personenbezogenen Daten verarbeite, mit. Bitte beachten Sie, dass
              zusätzlich zu den Regelungen der DSGVO die nationalen
              Datenschutzvorgaben in Ihrem bzw. meinem Wohn- und Sitzland gelten
              können.
            </p>
            <ul>
              <li>
                <p>
                  <strong>
                    Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO)
                  </strong>
                  - Die betroffene Person hat ihre Einwilligung in die
                  Verarbeitung der sie betreffenden personenbezogenen Daten für
                  einen spezifischen Zweck oder mehrere bestimmte Zwecke
                  gegeben.
                </p>
              </li>
              <li>
                <p>
                  <strong>
                    Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs.
                    1 S. 1 lit. b. DSGVO)
                  </strong>
                  - Die Verarbeitung ist für die Erfüllung eines Vertrags,
                  dessen Vertragspartei die betroffene Person ist, oder zur
                  Durchführung vorvertraglicher Maßnahmen erforderlich, die auf
                  Anfrage der betroffenen Person erfolgen.
                </p>
              </li>
              <li>
                <p>
                  <strong>
                    Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO)
                  </strong>
                  - Die Verarbeitung ist zur Wahrung der berechtigten Interessen
                  des Verantwortlichen oder eines Dritten erforderlich, sofern
                  nicht die Interessen oder Grundrechte und Grundfreiheiten der
                  betroffenen Person, die den Schutz personenbezogener Daten
                  erfordern, überwiegen.
                </p>
              </li>
            </ul>
            <p>
              <strong>Nationale Datenschutzregelungen in Deutschland</strong>:
              Zusätzlich zu den Datenschutzregelungen der
              Datenschutz-Grundverordnung gelten nationale Regelungen zum
              Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz
              zum Schutz vor Missbrauch personenbezogener Daten bei der
              Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG
              enthält insbesondere Spezialregelungen zum Recht auf Auskunft, zum
              Recht auf Löschung, zum Widerspruchsrecht, zur Verarbeitung
              besonderer Kategorien personenbezogener Daten, zur Verarbeitung
              für andere Zwecke und zur Übermittlung sowie automatisierten
              Entscheidungsfindung im Einzelfall einschließlich Profiling. Des
              Weiteren regelt es die Datenverarbeitung für Zwecke des
              Beschäftigungsverhältnisses (§ 26 BDSG), insbesondere im Hinblick
              auf die Begründung, Durchführung oder Beendigung von
              Beschäftigungsverhältnissen sowie die Einwilligung von
              Beschäftigten. Ferner können Landesdatenschutzgesetze der
              einzelnen Bundesländer zur Anwendung gelangen.
            </p>
            <ul class="m-elements"></ul>
            <h2 id="m27">Sicherheitsmaßnahmen</h2>
            <p>
              Ich treffe nach Maßgabe der gesetzlichen Vorgaben unter
              Berücksichtigung des Stands der Technik, der
              Implementierungskosten und der Art, des Umfangs, der Umstände und
              der Zwecke der Verarbeitung sowie der unterschiedlichen
              Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der
              Rechte und Freiheiten natürlicher Personen geeignete technische
              und organisatorische Maßnahmen, um ein dem Risiko angemessenes
              Schutzniveau zu gewährleisten.
            </p>
            <p>
              Zu den Maßnahmen gehören insbesondere die Sicherung der
              Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch
              Kontrolle des physischen und elektronischen Zugangs zu den Daten
              als auch des sie betreffenden Zugriffs, der Eingabe, der
              Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung.
              Des Weiteren habe ich Verfahren eingerichtet, die eine Wahrnehmung
              von Betroffenenrechten, die Löschung von Daten und Reaktionen auf
              die Gefährdung der Daten gewährleisten. Ferner berücksichtige ich
              den Schutz personenbezogener Daten bereits bei der Entwicklung
              bzw. Auswahl von Hardware, Software sowie Verfahren entsprechend
              dem Prinzip des Datenschutzes, durch Technikgestaltung und durch
              datenschutzfreundliche Voreinstellungen.
            </p>
            <p>
              <strong>SSL-Verschlüsselung (https)</strong>: Um Ihre via mein
              Online-Angebot übermittelten Daten zu schützen, nutze ich eine
              SSL-Verschlüsselung. Sie erkennen derart verschlüsselte
              Verbindungen an dem Präfix https:// in der Adresszeile Ihres
              Browsers.
            </p>
            <h2 id="m134">Einsatz von Cookies</h2>
            <p>
              Als "Cookies“ werden kleine Dateien bezeichnet, die auf Geräten
              der Nutzer gespeichert werden. Mittels Cookies können
              unterschiedliche Angaben gespeichert werden. Zu den Angaben können
              z.B. die Spracheinstellungen auf einer Webseite, der Loginstatus,
              ein Warenkorb oder die Stelle, an der ein Video geschaut wurde,
              gehören.
            </p>
            <p>
              Cookies werden im Regelfall auch dann eingesetzt, wenn die
              Interessen eines Nutzers oder sein Verhalten (z.B. Betrachten
              bestimmter Inhalte, Nutzen von Funktionen etc.) auf einzelnen
              Webseiten in einem Nutzerprofil gespeichert werden. Solche Profile
              dienen dazu, den Nutzern z.B. Inhalte anzuzeigen, die ihren
              potentiellen Interessen entsprechen. Dieses Verfahren wird auch
              als "Tracking", d.h., Nachverfolgung der potentiellen Interessen
              der Nutzer bezeichnet. Zu dem Begriff der Cookies zähle ich ferner
              andere Technologien, die die gleichen Funktionen wie Cookies
              erfüllen (z.B., wenn Angaben der Nutzer anhand pseudonymer
              Onlinekennzeichnungen gespeichert werden, auch als "Nutzer-IDs"
              bezeichnet).
            </p>
            <p>
              Soweit ich Cookies oder "Tracking"-Technologien einsetze,
              informiere ich Sie gesondert in meiner Datenschutzerklärung.
            </p>
            <p>
              <strong>Hinweise zu Rechtsgrundlagen: </strong> Auf welcher
              Rechtsgrundlage ich Ihre personenbezogenen Daten mit Hilfe von
              Cookies verarbeite, hängt davon ab, ob ich Sie um eine
              Einwilligung bitte. Falls dies zutrifft und Sie in die Nutzung von
              Cookies einwilligen, ist die Rechtsgrundlage der Verarbeitung
              Ihrer Daten die erklärte Einwilligung. Andernfalls werden die
              mithilfe von Cookies verarbeiteten Daten auf Grundlage meiner
              berechtigten Interessen (z.B. an einem betriebswirtschaftlichen
              Betrieb meines Onlineangebotes und dessen Verbesserung)
              verarbeitet oder, wenn der Einsatz von Cookies erforderlich ist,
              um meine vertraglichen Verpflichtungen zu erfüllen.
            </p>
            <p>
              <strong>Widerruf und Widerspruch (Opt-Out): </strong> Unabhängig
              davon, ob die Verarbeitung auf Grundlage einer Einwilligung oder
              gesetzlichen Erlaubnis erfolgt, haben Sie jederzeit die
              Möglichkeit, eine erteilte Einwilligung zu widerrufen oder der
              Verarbeitung Ihrer Daten durch Cookie-Technologien zu
              widersprechen (zusammenfassend als "Opt-Out" bezeichnet).
            </p>
            <p>
              Sie können Ihren Widerspruch zunächst mittels der Einstellungen
              Ihres Browsers erklären, z.B., indem Sie die Nutzung von Cookies
              deaktivieren (wobei hierdurch auch die Funktionsfähigkeit meines
              Onlineangebotes eingeschränkt werden kann).
            </p>
            <p>
              Ein Widerspruch gegen den Einsatz von Cookies zu Zwecken des
              Onlinemarketings kann mittels einer Vielzahl von Diensten, vor
              allem im Fall des Trackings, über die US-amerikanische Seite
              <a href="http://www.aboutads.info/choices/" target="_blank">
                http://www.aboutads.info/choices/
              </a>
              oder die EU-Seite
              <a href="http://www.youronlinechoices.com/" target="_blank">
                http://www.youronlinechoices.com/
              </a>
              oder generell auf
              <a href="http://optout.aboutads.info" target="_blank">
                http://optout.aboutads.info
              </a>
              erklärt werden.
            </p>
            <p>
              <strong>
                Verarbeitung von Cookie-Daten auf Grundlage einer Einwilligung
              </strong>
              : Bevor ich Daten im Rahmen der Nutzung von Cookies verarbeite
              oder verarbeiten lassen, bitten ich die Nutzer um eine jederzeit
              widerrufbare Einwilligung. Bevor die Einwilligung nicht
              ausgesprochen wurde, werden allenfalls Cookies eingesetzt, die für
              den Betrieb meines Onlineangebotes erforderlich sind. Deren
              Einsatz erfolgt auf der Grundlage meines Interesses und des
              Interesses der Nutzer an der erwarteten Funktionsfähigkeit meines
              Onlineangebotes.
            </p>
            <ul class="m-elements">
              <li>
                <p>
                  <strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z.B.
                  besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten),
                  Meta-/Kommunikationsdaten (z.B. Geräte-Informationen,
                  IP-Adressen).
                </p>
              </li>
              <li>
                <p>
                  <strong>Betroffene Personen:</strong> Nutzer (z.B.
                  Webseitenbesucher, Nutzer von Onlinediensten).
                </p>
              </li>
              <li>
                <p>
                  <strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1
                  S. 1 lit. a DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1
                  lit. f. DSGVO).
                </p>
              </li>
            </ul>
            <h2 id="m104">Blogs und Publikationsmedien</h2>
            <p>
              Ich nutze Blogs oder vergleichbare Mittel der Onlinekommunikation
              und Publikation (nachfolgend "Publikationsmedium"). Die Daten der
              Leser werden für die Zwecke des Publikationsmediums nur insoweit
              verarbeitet, als es für dessen Darstellung und die Kommunikation
              zwischen Autoren und Lesern oder aus Gründen der Sicherheit
              erforderlich ist. Im Übrigen verweise ich auf die Informationen
              zur Verarbeitung der Besucher meines Publikationsmediums im Rahmen
              dieser Datenschutzhinweise.
            </p>
            <ul class="m-elements">
              <li>
                <p>
                  <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.B.
                  Namen, Adressen), Kontaktdaten (z.B. E-Mail, Telefonnummern),
                  Inhaltsdaten (z.B. Texteingaben, Fotografien, Videos),
                  Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten,
                  Zugriffszeiten), Meta-/Kommunikationsdaten (z.B.
                  Geräte-Informationen, IP-Adressen).
                </p>
              </li>
              <li>
                <p>
                  <strong>Betroffene Personen:</strong> Nutzer (z.B.
                  Webseitenbesucher, Nutzer von Onlinediensten).
                </p>
              </li>
              <li>
                <p>
                  <strong>Zwecke der Verarbeitung:</strong> Vertragliche
                  Leistungen und Service, Feedback (z.B. Sammeln von Feedback
                  via Online-Formular).
                </p>
              </li>
              <li>
                <p>
                  <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und
                  vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO),
                  Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
                </p>
              </li>
            </ul>
            <h2 id="m225">Bereitstellung des Onlineangebotes und Webhosting</h2>
            <p>
              Um mein Onlineangebot sicher und effizient bereitstellen zu
              können, nehme ich die Leistungen von einem oder mehreren
              Webhosting-Anbietern in Anspruch, von deren Servern (bzw. von
              ihnen verwalteten Servern) das Onlineangebot abgerufen werden
              kann. Zu diesen Zwecken kann ich Infrastruktur- und
              Plattformdienstleistungen, Rechenkapazität, Speicherplatz und
              Datenbankdienste sowie Sicherheitsleistungen und technische
              Wartungsleistungen in Anspruch nehmen.
            </p>
            <p>
              Zu den im Rahmen der Bereitstellung des Hostingangebotes
              verarbeiteten Daten können alle die Nutzer meines Onlineangebotes
              betreffenden Angaben gehören, die im Rahmen der Nutzung und der
              Kommunikation anfallen. Hierzu gehören regelmäßig die IP-Adresse,
              die notwendig ist, um die Inhalte von Onlineangeboten an Browser
              ausliefern zu können, und alle innerhalb meines Onlineangebotes
              oder von Webseiten getätigten Eingaben.
            </p>
            <p>
              <strong>E-Mail-Versand und -Hosting</strong>: Die von mir in
              Anspruch genommenen Webhosting-Leistungen umfassen ebenfalls den
              Versand, den Empfang sowie die Speicherung von E-Mails. Zu diesen
              Zwecken werden die Adressen der Empfänger sowie Absender als auch
              weitere Informationen betreffend den E-Mailversand (z.B. die
              beteiligten Provider) sowie die Inhalte der jeweiligen E-Mails
              verarbeitet. Die vorgenannten Daten können ferner zu Zwecken der
              Erkennung von SPAM verarbeitet werden. Ich bitte darum, zu
              beachten, dass E-Mails im Internet grundsätzlich nicht
              verschlüsselt versendet werden. Im Regelfall werden E-Mails zwar
              auf dem Transportweg verschlüsselt, aber (sofern kein sogenanntes
              Ende-zu-Ende-Verschlüsselungsverfahren eingesetzt wird) nicht auf
              den Servern, von denen sie abgesendet und empfangen werden. Ich
              kann daher für den Übertragungsweg der E-Mails zwischen dem
              Absender und dem Empfang auf meinen Server keine Verantwortung
              übernehmen.
            </p>
            <p>
              <strong>Erhebung von Zugriffsdaten und Logfiles</strong>: Ich
              selbst (bzw. mein Webhostinganbieter) erheben Daten zu jedem
              Zugriff auf den Server (sogenannte Serverlogfiles). Zu den
              Serverlogfiles können die Adresse und Name der abgerufenen
              Webseiten und Dateien, Datum und Uhrzeit des Abrufs, übertragene
              Datenmengen, Meldung über erfolgreichen Abruf, Browsertyp nebst
              Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor
              besuchte Seite) und im Regelfall IP-Adressen und der anfragende
              Provider gehören.
            </p>
            <p>
              Die Serverlogfiles können zum einen zu Zwecken der Sicherheit
              eingesetzt werden, z.B., um eine Überlastung der Server zu
              vermeiden (insbesondere im Fall von missbräuchlichen Angriffen,
              sogenannten DDoS-Attacken) und zum anderen, um die Auslastung der
              Server und ihre Stabilität sicherzustellen.
            </p>
            <p>
              <strong>Content-Delivery-Network</strong>: Ich setze ein
              "Content-Delivery-Network" (CDN) ein. Ein CDN ist ein Dienst, mit
              dessen Hilfe Inhalte eines Onlineangebotes, insbesondere große
              Mediendateien, wie Grafiken oder Programm-Skripte, mit Hilfe
              regional verteilter und über das Internet verbundener Server
              schneller und sicherer ausgeliefert werden können.
            </p>
            <ul class="m-elements">
              <li>
                <p>
                  <strong>Verarbeitete Datenarten:</strong> Inhaltsdaten (z.B.
                  Texteingaben, Fotografien, Videos), Nutzungsdaten (z.B.
                  besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten),
                  Meta-/Kommunikationsdaten (z.B. Geräte-Informationen,
                  IP-Adressen).
                </p>
              </li>
              <li>
                <p>
                  <strong>Betroffene Personen:</strong> Nutzer (z.B.
                  Webseitenbesucher, Nutzer von Onlinediensten).
                </p>
              </li>
              <li>
                <p>
                  <strong>Zwecke der Verarbeitung:</strong> Content Delivery
                  Network (CDN).
                </p>
              </li>
              <li>
                <p>
                  <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen
                  (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
                </p>
              </li>
            </ul>
            <h2 id="m264">Onlinemarketing</h2>
            <p>
              Ich verarbeite personenbezogene Daten zu Zwecken des
              Onlinemarketings, worunter insbesondere die Darstellung von
              werbenden und sonstigen Inhalten (zusammenfassend als "Inhalte"
              bezeichnet) anhand potentieller Interessen der Nutzer sowie die
              Messung ihrer Effektivität fallen.
            </p>
            <p>
              Zu diesen Zwecken werden sogenannte Nutzerprofile angelegt und in
              einer Datei (sogenannte "Cookie") gespeichert oder ähnliche
              Verfahren genutzt, mittels derer die für die Darstellung der
              vorgenannten Inhalte relevante Angaben zum Nutzer gespeichert
              werden. Zu diesen Angaben können z.B. betrachtete Inhalte,
              besuchte Webseiten, genutzte Onlinenetzwerke, aber auch
              Kommunikationspartner und technische Angaben, wie der verwendete
              Browser, das verwendete Computersystem sowie Angaben zu
              Nutzungszeiten gehören. Sofern Nutzer in die Erhebung ihrer
              Standortdaten eingewilligt haben, können auch diese verarbeitet
              werden.
            </p>
            <p>
              Es werden ebenfalls die IP-Adressen der Nutzer gespeichert. Jedoch
              nutze ich IP-Masking-Verfahren (d.h., Pseudonymisierung durch
              Kürzung der IP-Adresse) zum Schutz der Nutzer. Generell werden im
              Rahmen des Onlinemarketingverfahren keine Klardaten der Nutzer
              (wie z.B. E-Mail-Adressen oder Namen) gespeichert, sondern
              Pseudonyme. D.h., ich als auch die Anbieter der
              Onlinemarketingverfahren kennen nicht die tatsächlich Identität
              der Nutzer, sondern nur die in deren Profilen gespeicherten
              Angaben.
            </p>
            <p>
              Die Angaben in den Profilen werden im Regelfall in den Cookies
              oder mittels ähnlicher Verfahren gespeichert. Diese Cookies können
              später generell auch auf anderen Webseiten die dasselbe
              Onlinemarketingverfahren einsetzen, ausgelesen und zu Zwecken der
              Darstellung von Inhalten analysiert als auch mit weiteren Daten
              ergänzt und auf dem Server des Onlinemarketingverfahrensanbieters
              gespeichert werden.
            </p>
            <p>
              Ausnahmsweise können Klardaten den Profilen zugeordnet werden. Das
              ist der Fall, wenn die Nutzer z.B. Mitglieder eines sozialen
              Netzwerks sind, dessen Onlinemarketingverfahren ich einsetze und
              das Netzwerk die Profile der Nutzer im den vorgenannten Angaben
              verbindet. Ich bitten darum, zu beachten, dass Nutzer mit den
              Anbietern zusätzliche Abreden, z.B. durch Einwilligung im Rahmen
              der Registrierung, treffen können.
            </p>
            <p>
              Ich erhalte grundsätzlich nur Zugang zu zusammengefassten
              Informationen über den Erfolg meiner Werbeanzeigen. Jedoch kann
              ich im Rahmen sogenannter Konversionsmessungen prüfen, welche
              meiner Onlinemarketingverfahren zu einer sogenannten Konversion
              geführt haben, d.h. z.B., zu einem Vertragsschluss mit mir. Die
              Konversionsmessung wird alleine zur Analyse des Erfolgs meiner
              Marketingmaßnahmen verwendet.
            </p>
            <p>
              <strong>Hinweise zu Rechtsgrundlagen:</strong> Sofern ich die
              Nutzer um deren Einwilligung in den Einsatz der Drittanbieter
              bitte, ist die Rechtsgrundlage der Verarbeitung von Daten die
              Einwilligung. Ansonsten werden die Daten der Nutzer auf Grundlage
              meiner berechtigten Interessen (d.h. Interesse an effizienten,
              wirtschaftlichen und empfängerfreundlichen Leistungen)
              verarbeitet. In diesem Zusammenhang möchte ich Sie auch auf die
              Informationen zur Verwendung von Cookies in dieser
              Datenschutzerklärung hinweisen.
            </p>
            <ul class="m-elements">
              <li>
                <p>
                  <strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z.B.
                  besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten),
                  Meta-/Kommunikationsdaten (z.B. Geräte-Informationen,
                  IP-Adressen).
                </p>
              </li>
              <li>
                <p>
                  <strong>Betroffene Personen:</strong> Nutzer (z.B.
                  Webseitenbesucher, Nutzer von Onlinediensten), Interessenten.
                </p>
              </li>
              <li>
                <p>
                  <strong>Zwecke der Verarbeitung:</strong> Tracking (z.B.
                  interessens-/verhaltensbezogenes Profiling, Nutzung von
                  Cookies), Remarketing, Besuchsaktionsauswertung,
                  Interessenbasiertes und verhaltensbezogenes Marketing,
                  Profiling (Erstellen von Nutzerprofilen), Konversionsmessung
                  (Messung der Effektivität von Marketingmaßnahmen),
                  Reichweitenmessung (z.B. Zugriffsstatistiken, Erkennung
                  wiederkehrender Besucher).
                </p>
              </li>
              <li>
                <p>
                  <strong>Sicherheitsmaßnahmen:</strong> IP-Masking
                  (Pseudonymisierung der IP-Adresse).
                </p>
              </li>
              <li>
                <p>
                  <strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1
                  S. 1 lit. a DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1
                  lit. f. DSGVO).
                </p>
              </li>
              <li>
                <p>
                  <strong>Widerspruchsmöglichkeit (Opt-Out):</strong> Ich
                  verweise auf die Datenschutzhinweise der jeweiligen Anbieter
                  und die zu den Anbietern angegebenen Widerspruchsmöglichkeiten
                  (sog. \"Opt-Out\"). Sofern keine explizite Opt-Out-Möglichkeit
                  angegeben wurde, besteht zum einen die Möglichkeit, dass Sie
                  Cookies in den Einstellungen Ihres Browsers abschalten.
                  Hierdurch können jedoch Funktionen meines Onlineangebotes
                  eingeschränkt werden. Ich empfehle daher zusätzlich die
                  folgenden Opt-Out-Möglichkeiten, die zusammenfassend auf
                  jeweilige Gebiete gerichtet angeboten werden: a) Europa:{" "}
                  <a href="https://www.youronlinechoices.eu" target="_blank">
                    https://www.youronlinechoices.eu
                  </a>
                  . b) Kanada:{" "}
                  <a
                    href="https://www.youradchoices.ca/choices"
                    target="_blank"
                  >
                    https://www.youradchoices.ca/choices
                  </a>
                  . c) USA:{" "}
                  <a href="https://www.aboutads.info/choices" target="_blank">
                    https://www.aboutads.info/choices
                  </a>
                  . d) Gebietsübergreifend:{" "}
                  <a href="http://optout.aboutads.info" target="_blank">
                    http://optout.aboutads.info
                  </a>
                  .
                </p>
              </li>
            </ul>
            <p>
              <strong>Eingesetzte Dienste und Diensteanbieter:</strong>
            </p>
            <ul class="m-elements">
              <li>
                <p>
                  <strong>Google Analytics:</strong> Onlinemarketing und
                  Webanalyse; Dienstanbieter: Google Ireland Limited, Gordon
                  House, Barrow Street, Dublin 4, Irland, Mutterunternehmen:
                  Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA
                  94043, USA; Website:{" "}
                  <a
                    href="https://marketingplatform.google.com/intl/de/about/analytics/"
                    target="_blank"
                  >
                    https://marketingplatform.google.com/intl/de/about/analytics/
                  </a>
                  ; Datenschutzerklärung:{" "}
                  <a href="https://policies.google.com/privacy" target="_blank">
                    https://policies.google.com/privacy
                  </a>
                  ; Privacy Shield (Gewährleistung Datenschutzniveau bei
                  Verarbeitung von Daten in den USA):{" "}
                  <a
                    href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active"
                    target="_blank"
                  >
                    https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active
                  </a>
                  ; Widerspruchsmöglichkeit (Opt-Out): Opt-Out-Plugin:{" "}
                  <a
                    href="http://tools.google.com/dlpage/gaoptout?hl=de"
                    target="_blank"
                  >
                    http://tools.google.com/dlpage/gaoptout?hl=de
                  </a>
                  , Einstellungen für die Darstellung von Werbeeinblendungen:{" "}
                  <a
                    href="https://adssettings.google.com/authenticated"
                    target="_blank"
                  >
                    https://adssettings.google.com/authenticated
                  </a>
                  .
                </p>
              </li>
            </ul>
            <h2 id="m15">
              Änderung und Aktualisierung der Datenschutzerklärung
            </h2>
            <p>
              Ich bitte Sie, sich regelmäßig über den Inhalt meiner
              Datenschutzerklärung zu informieren. Ich passe die
              Datenschutzerklärung an, sobald die Änderungen der von mir
              durchgeführten Datenverarbeitungen dies erforderlich machen. Ich
              informieren Sie, sobald durch die Änderungen eine
              Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder eine
              sonstige individuelle Benachrichtigung erforderlich wird.
            </p>
            <ul class="m-elements"></ul>
            <h2 id="m10">Rechte der betroffenen Personen</h2>
            <p>
              Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu,
              die sich insbesondere aus Art. 15 bis 18 und 21 DS-GVO ergeben:
            </p>
            <ul>
              <li>
                <strong>
                  Widerspruchsrecht: Sie haben das Recht, aus Gründen, die sich
                  aus Ihrer besonderen Situation ergeben, jederzeit gegen die
                  Verarbeitung der Sie betreffenden personenbezogenen Daten, die
                  aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt,
                  Widerspruch einzulegen; dies gilt auch für ein auf diese
                  Bestimmungen gestütztes Profiling. Werden die Sie betreffenden
                  personenbezogenen Daten verarbeitet, um Direktwerbung zu
                  betreiben, haben Sie das Recht, jederzeit Widerspruch gegen
                  die Verarbeitung der Sie betreffenden personenbezogenen Daten
                  zum Zwecke derartiger Werbung einzulegen; dies gilt auch für
                  das Profiling, soweit es mit solcher Direktwerbung in
                  Verbindung steht.
                </strong>
              </li>
              <li>
                <strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben
                das Recht, erteilte Einwilligungen jederzeit zu widerrufen.
              </li>
              <li>
                <strong>Auskunftsrecht:</strong> Sie haben das Recht, eine
                Bestätigung darüber zu verlangen, ob betreffende Daten
                verarbeitet werden und auf Auskunft über diese Daten sowie auf
                weitere Informationen und Kopie der Daten entsprechend den
                gesetzlichen Vorgaben.
              </li>
              <li>
                <strong>Recht auf Berichtigung:</strong> Sie haben entsprechend
                den gesetzlichen Vorgaben das Recht, die Vervollständigung der
                Sie betreffenden Daten oder die Berichtigung der Sie
                betreffenden unrichtigen Daten zu verlangen.
              </li>
              <li>
                <strong>
                  Recht auf Löschung und Einschränkung der Verarbeitung:
                </strong>{" "}
                Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu
                verlangen, dass Sie betreffende Daten unverzüglich gelöscht
                werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben
                eine Einschränkung der Verarbeitung der Daten zu verlangen.
              </li>
              <li>
                <strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das
                Recht, Sie betreffende Daten, die Sie mir bereitgestellt haben,
                nach Maßgabe der gesetzlichen Vorgaben in einem strukturierten,
                gängigen und maschinenlesbaren Format zu erhalten oder deren
                Übermittlung an einen anderen Verantwortlichen zu fordern.
              </li>
              <li>
                <strong>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben
                ferner nach Maßgabe der gesetzlichen Vorgaben das Recht, bei
                einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat Ihres
                gewöhnlichen Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts
                des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die
                Verarbeitung der Sie betreffenden personenbezogenen Daten gegen
                die DSGVO verstößt.
              </li>
            </ul>
          </p>
          <p class="seal">
            <a
              href="https://datenschutz-generator.de/?l=de"
              title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
              target="_blank"
            >
              Erstellt mit Datenschutz-Generator.de von Dr. jur. Thomas Schwenke
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
