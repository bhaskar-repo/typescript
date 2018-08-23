//Youtube Video class definition
class YouTubeVideo {
    private id: number;
    private url: string;
    private title: string;
    private thumbnail: string;
    private size: string;
    private resolutionTypes: string[];
    private likes: number;
    private dis_likes: number;
    private views: number;
    private uploadedBy: string;
    private comments: string[];
    private description: string;
    private subscribers: number;
    private watchLater: boolean;

    constructor(id:number, url: string,title: string,thumbnail: string,size: string,resolutionTypes: string[],likes: number,dis_likes: number,views: number,uploadedBy: string,comments: string[],description: string,subscribers: number,watchLater: boolean) { 
        this.id = id;
        this.url = url;
        this.title = title;
        this.thumbnail = thumbnail;
        this.size = size;
        this.resolutionTypes = resolutionTypes;
        this.likes = likes;
        this.dis_likes = dis_likes;
        this.views = views;
        this.uploadedBy = uploadedBy;
        this.comments = comments;
        this.description = description;
        this.subscribers = subscribers;
        this.watchLater = watchLater;
    }

    //getters and setters
    getId = ():number => { 
        return this.id;
    }
    setId = (id:number) => { 
        this.id = id;
    }
    getUrl = ():string => { 
        return this.url;
    }
    setUrl = (url: string) => { 
        this.url = url;
    }
    getTitle = ():string => { 
        return this.title;
    }
    setTitle = (title:string) => { 
        this.title = title;
    }
    getThumbnail = ():string => { 
        return this.thumbnail;
    }
    setThumbnail = (thumbnail:string) => { 
        this.thumbnail = thumbnail;
    }
    getSize = ():string => { 
        return this.size;
    }
    setSize = (size:string) => { 
        this.size = size;
    }
    getResolutionTypes = (): string[] => { 
        return this.resolutionTypes;
    }
    setResolutionTypes = (resolutionTypes: string[]) => { 
        this.resolutionTypes = resolutionTypes;
    } 
    getLikes = (): number => { 
        return this.likes;
    }
    setLikes = (likes: number) => { 
        this.likes = likes;
    }
    getDisLikes = ():number => { 
        return this.dis_likes;
    }
    setDisLikes = (dis_likes: number) => { 
        this.dis_likes = dis_likes;
    }
    getViews = (): number => { 
        return this.views;
    }
    setViews = (views:number) => { 
        this.views = views;
    }
    getUploadedBy = (): string => { 
        return this.uploadedBy;
    } 
    setUploadedBy = (uploadedBy:string) => { 
        this.uploadedBy = uploadedBy;
    }
    getComments = (): string[] => { 
        return this.comments;
    }
    setComments = (comments: string[]) => { 
        this.comments = comments;
    }
    getDescription = ():string => { 
        return this.description;
    }
    setDescription = (description: string) => { 
        this.description = description;
    }
    getSubscribers = ():number => { 
        return this.subscribers;
    }
    setSubscribers = (subscibers: number) => { 
        this.subscribers = subscibers;
    }
    isWatchLater = (): boolean => { 
        return this.watchLater;
    }
    setWatchLater = (watchlater: boolean) => { 
        this.watchLater = watchlater
    }
}

let getRelatedVideosUrl: () => string[];
let resolutionTypes: string[] = ["1080 HD", "468"]
let comments: string[] = ["Hi", "Hello nice one"];
let myVideo = new YouTubeVideo(101, "https://www.youtube.com/xyz", "Best comedy Ever", "Comedy", "1 GB", resolutionTypes, 34, 1, 50000, "Bhaskar", comments, "This video is entitled to make people laugh and be happy", 345623, true);

console.log("Title of the video = " + myVideo.getTitle());
console.log("Thumbnail = " + myVideo.getThumbnail());
console.log("Size = " + myVideo.getSize());
console.log("Resolution Types = " + myVideo.getResolutionTypes());
console.log("likes = " + myVideo.getLikes());
console.log("Dis Likes = " + myVideo.getDisLikes());
console.log("Views = " + myVideo.getViews());
console.log("Uploaded By = " + myVideo.getUploadedBy());
console.log("Comments = " + myVideo.getComments());
console.log("Description = " + myVideo.getDescription());
console.log("Subscribers = " + myVideo.getSubscribers());
console.log("WatchLater = " + myVideo.isWatchLater());