document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventiListener('cilck', function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoview({
            behavior: 'smooth'
        })
    })
})