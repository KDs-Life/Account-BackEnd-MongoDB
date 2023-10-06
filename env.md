# MongoDB-Verbindung in deiner Node.js-Anwendung

Folge diesen Schritten, um MongoDB in deiner Node.js-Anwendung mit einem `.env`-Ordner zu verbinden:

1. **MongoDB Database Access anlegen:**
   - Melde dich in deinem MongoDB-Cluster an.
   - Gehe zu "Database Access" und wähle "Add New Database User".
   - Wenn der Benutzer bereits vorhanden ist, klicke auf "Edit" und bearbeite das Passwort. Authentifiziere dich mit deinem aktuellen Passwort.
   - Kopiere das neue Passwort.

2. **.env-Datei bearbeiten:**
   - Öffne deine `.env`-Datei in deinem Projektverzeichnis.
   - Erstelle eine Umgebungsvariable für die MongoDB-Verbindung, z.B. `MONGODB_URI`.
   - Füge den MongoDB-Verbindungslink ein, wobei `<Benutzername>` und `<Passwort>` durch deine MongoDB-Zugangsdaten ersetzt werden:

