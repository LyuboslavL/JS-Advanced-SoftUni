class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        };

        if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`;
        };

        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
    };

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error(`You can't like the same story twice!`);
        };

        if (username === this.creator) {
            throw new Error(`You can't like your own story!`);
        };

        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    };

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error(`You can't dislike this story!`);
        };

        this._likes = this._likes.filter(x => x !== username);
        return `${username} disliked ${this.title}`;
    };

    comment(username, content, id) {
        let commentator = {
            Id: id,
            Username: username,
            Content: content,
            Replies: []
        };

        let existingComment = this._comments.find(c => c.Id === id);

        if (existingComment) {
            let replyId = Number(existingComment.Id + '.' + (existingComment.Replies.length + 1));
            let reply = {
                Id: replyId,
                Username: username,
                Content: content,
            };

            existingComment.Replies.push(reply);
            return `You replied successfully`;
        }

        commentator.Id = this._comments.length + 1;
        this._comments.push(commentator);
        return `${username} commented on ${this.title}`;
    };

    toString(sortingType) {
        const sortCriteria = {
            asc: (a, b) => a.Id - b.Id,
            desc: (a, b) => b.Id - a.Id,
            username: (a, b) => a.Username.localeCompare(b.Username)
        };

        this._comments.sort(sortCriteria[sortingType])
            .forEach((x) => {
                if (x.Replies.length > 0) {
                    x.Replies.sort(sortCriteria[sortingType]);
                }
            })

        let result = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments: `;
        // let replies = [];

        for (let comment of this._comments) {
            result += `\n-- ${comment.Id}. ${comment.Username}: ${comment.Content}`;
            if (comment.Replies.length > 0) {
                for (let reply of comment.Replies) {
                    result += `\n--- ${reply.Id}. ${reply.Username}: ${reply.Content}`;

                }
            }
        };
        return result;
    }

};

let art = new Story("My Story", "Anny");
art.like("John");
art.like();
art.dislike("Sally");
art.like("Ivan");
art.like("Steven");
art.like();
art.comment("Anny", "Some Content");
art.comment("Ammy", "New Content", 1);
art.comment("Zane", "Reply", 2);
art.comment("Jessy", "Nice :)");
art.comment("SAmmy", "Reply@", 2);
art.toString('asc');

// `Title: My Story
// Creator: Anny
// Likes: 3
// Comments:
// -- 1. Anny: Some Content
// --- 1.1. Ammy: New Content
// -- 2. Zane: Reply
// --- 2.1. SAmmy: Reply@
// -- 3. Jessy: Nice :)`