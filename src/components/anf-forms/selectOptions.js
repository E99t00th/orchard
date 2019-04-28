const selectOptions = {
    role: [ 'title', 'intro', 'caption', 'body', 'author', 'byline', 
            'illustrator', 'photographer', 'quote', 'pullquote', 'heading', 'heading1', 
            'heading2', 'heading3', 'heading4', 'heading5', 'heading6', 'arkit', 'image', 
            'photo', 'figure', 'portrait', 'logo', 'gallery', 'mosaic', 'audio', 'music', 
            'embedwebvideo', 'video', 'place', 'map', 'instagram', 'facebook_post', 'tweet', 
            'datatable', 'htmltable', 'medium_rectangle_advertisement', 'banner_advertisement', 
            'header', 'container', 'aside', 'section', 'chapter', 'divider' ],
    verticalPosition: ['top', 'center', 'bottom'],
    horizontalPosition: ['left', 'center', 'right'],
    targetComponentIdentifier: ['none'],
    subscriptionStatus: ['', 'bundle', 'subscribed'],
    sizeClass: ['', 'any', 'regular', 'compact'],
    contSize: ['', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'AX-M', 'AX-L', 'AX-XL', 'AX-XXL', 'AX-XXXL'],
    viewLocation: ['', 'any', 'article', 'issue_table_of_contents', 'issue'],
    platform: ['', 'any', 'ios', 'macos'],
    fillType: ['none', 'linear_gradient', 'image', 'repeatable_image', 'video'],
    fillMode: ['fit', 'cover'],
    fillAttachment: ['fixed', 'scroll'],
    fillRepeat: ['none', 'x', 'y', 'both'],
    animationType: ['appear', 'fade_in', 'move_in', 'scale_fade'],
    behaviorType: ['background_motion', 'background_parallax', 'motion', 'parallax', 'springy'],
    format: ['markdown', 'html', 'none'] 
}

export default selectOptions