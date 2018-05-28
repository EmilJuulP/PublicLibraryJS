pl.view.updateBook = {
    setupUserInterface: function () {
        var formE1 = document.forms['Book'],
            saveButton = formE1.commit,
            selectBookE1 = formE1.selectBook;
        var i=0, key="", keys[], book=null, optionE1=null;
        // Load all book objects
        Book.loadAll();
        //populate the selection list with books
        keys = Object.keys( Book.instances);
        for (i=0; i < keys.length; i++) {
            key = keys[i];
            book = Book.instances[key];
            optionE1 = document.createElement("option");
            optionE1.text = book.title;
            optionE1.value = book.isbn;
            selectBookE1.add( optionE1, null);
        }
        // when a book is selected, populate the form with the book data
        selectBookE1.addEventListener("change", function() {
            var book=null, key = selectBookE1.value;
            if (key) {
                book = Book.instances[key];
                formE1.isbn.value = book.isbn;
                formE1.title.value = book.title;
                formE1.year.value = book.year;
            } else {
                formE1.isbn.value = "";
                formE1.title.value = "";
                formE1.year.value = "";
            }
        });
        saveButton.addEventListener("click",
            pl.view.updateBook.handleUpdateButtonClickEvent);
            window.addEventListener("beforeunload", function () {
                Book.saveAll();
            });
    },
    // save updated data
    handleUpdateButtonClickEvent: function () {
        var formE1 = document.forms['Book'];
        var slots = { isbn: formE1.isbn.value,
            title: formE1.title.value,
            year: formE1.year.value
        };
        Book.update( slots);
        formE1.reset();
    }
};