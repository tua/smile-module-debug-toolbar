var config = {
    map: {
        '*': {
            Smile_DebugToolbar: 'Smile_DebugToolbar'
        }
    },
    paths: {
        'hljs': 'Smile_DebugToolbar/js/highlight.min',
        'smile-toolbar': 'Smile_DebugToolbar/js/smile-toolbar',
        'smile-table': 'Smile_DebugToolbar/js/smile-table',
    },
    shim: {
        'smile-toolbar': {
            deps: ['hljs', 'smile-table']
        }
    }
};
