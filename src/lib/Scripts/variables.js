
export const apiUrl = "http://localhost:8000/api"


export const regex = {
    custName: new RegExp("^(?:[A-ZÁÉÍÓÖŐÚÜŰÄÖÜẞÈÊËÑÅÆØČĆĐŠŽŁŃĘÓ][a-záéíóöőúüűäöüßèêëñåæøčćđšžłńęó]+(?:[-'][A-ZÁÉÍÓÖŐÚÜŰÄÖÜẞÈÊËÑÅÆØČĆĐŠŽŁŃĘÓ][a-záéíóöőúüűäöüßèêëñåæøčćđšžłńęó]*)*)(?: (?:[A-ZÁÉÍÓÖŐÚÜŰÄÖÜẞÈÊËÑÅÆØČĆĐŠŽŁŃĘÓ][a-záéíóöőúüűäöüßèêëñåæøčćđšžłńęó]+(?:[-'][A-ZÁÉÍÓÖŐÚÜŰÄÖÜẞÈÊËÑÅÆØČĆĐŠŽŁŃĘÓ][a-záéíóöőúüűäöüßèêëñåæøčćđšžłńęó]*)*))+(?:\\. (?=[A-Z]))?$"),
    email: new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"),
    iban: new RegExp("(?:^[A-Z]{2}[0-9]{2}[A-Z0-9]{1,30}$|^$)"),
    username: new RegExp("^[a-zA-Z0-9_.-]+$"),
    taxId: new RegExp("^\\d{8}-\\d-\\d{2}$"),
    isFirstCharDigit: new RegExp("^\\d"),
    website: new RegExp("^(https?:\\/\\/)([a-zA-Z0-9.-]+\\.[a-zA-Z]{2,})(\\/.*)?$"),
    formatNum: new RegExp("\\B(?=(\\d{3})+(?!\\d))", "g")
}

export const condition = {
    5: "🔵 Használatlan",
    4: "🟢 Kiváló",
    3: "🟡 Jó",
    2: "🟠 Kielégítő",
    1: "🔴 Lehasznált",
}