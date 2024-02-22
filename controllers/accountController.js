import Account from "../models/Account.js";

// Definieren einer Funktion, um alle Konten abzurufen
export const getAllAccounts = async (req, res, next) => {
  try {
    // Versuche, alle Konten aus der Datenbank abzurufen
    const accountController = await Account.find();
    // Überprüfe, ob es keine Konten gibt. 
    if (!Account - length) {
      // Wirft einen Fehler mit dem Statuscode 404 und einer Fehlermeldung
      throw { statusCode: 404, message: "account not found" };
    }

    // Sendet die gefundenen Konten als JSON-Antwort zurück
    res.json(accountController);
  } catch (error) {
    // Wenn ein Fehler auftritt, gibt es den Fehler an die nächste Middleware weiter
    next(error);
  }
};

// Definieren einer Funktion, um ein Konto anhand seiner ID abzurufen
export const getAccountById = async (req, res, next) => {
  // Extrahieren der ID aus den Anfrageparametern
  const { id } = req.params;

  try {
    // Versuche, ein Konto anhand seiner ID in der Datenbank zu finden
    const account = await Account.findById(id);

    // Überprüfe, ob kein Konto mit der gegebenen ID gefunden wurde
    if (!account) {
      throw { statusCode: 404, message: "account not found" };
    }
    // Sendet das gefundene Konto als Antwort zurück
    res.send(account);
  } catch (error) {
    next(error);
  }
};
export const addNewAccount = async (req, res, next) => {
  const { name, first_name, email, slogan } = req.body;

  try {
    // Erstelle ein neues Account-Objekt mit den übergebenen Daten
    const newAccount = new Account({
      name,
      first_name,
      email,
      slogan,
    });

    // Speichere das neue Konto in der Datenbank
    const savedAccount = await newAccount.save();

    // Sende eine Erfolgsantwort zurück
    if (!addNewAccount) {
      throw { statusCode: 404, message: "account not found" };
    }
    res.json(updateAccount);
  } catch (error) {
    next(error);
  }
};

// Funktion, um ein Konto zu aktualisieren

export const updateAccount = async (req, res, next) => {
  const { id } = req.params; // Die ID des zu aktualisierenden Kontos aus den Anfrageparametern erhalten
  const { name, first_name, email, slogan } = req.body; // Die zu aktualisierenden Daten aus dem Anfragekörper erhalten

  try {
    // Versuche, das Konto anhand seiner ID zu aktualisieren
    const updateAccount = await Account.findByIdAndUpdate(
      id,
      { name, first_name, email, slogan }, // Die zu aktualisierenden Daten
      { new: true } // Option, um das aktualisierte Konto zurückzugeben
    );

    if (!updateAccount) {
      throw { statusCode: 404, message: "account not found" };
    }
    res.json(updateAccount);
  } catch (error) {
    next(error);
  }
};

export const addTagToAccount = async (req, res, next) => {
  const { id } = req.params;
  const { tag } = req.body;

  try {
    const account = await Account.findById(id);
    if (!account) {
      throw { statusCode: 404, message: "account not found" };
    }

    account.tag.push(tag);
    const updateAccount = await account.save();
    res.json(updateAccount);
  } catch (error) {
    next(error);
  }
};

// Funktion, um ein Konto zu löschen

export const deleteAccount = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deleteAccount = await Account.findByIdAndDelete(id);

    if (!deleteAccount) {
      throw { statuscode: 404, message: "account not found" };
    }
    res.status(200).json({ message: "Account was deleted" });
  } catch (error) {
    next(error);
  }
};
