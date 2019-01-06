export default {
    formatLink: function(title) {
        return `/blog/${title.replace(/\s+/g, '-').toLowerCase()}`;
    }
}