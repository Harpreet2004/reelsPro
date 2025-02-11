import mongoose,{Schema,model, models} from "mongoose";

export const video_dimesnsions = {
    width: 1080,
    height: 1920,
} as const

export interface IVIDEO {
    _id? : mongoose.Types.ObjectId;
    title: string;
    description: string;
    videoUrl: string;
    thumbnail: string;
    controls?: boolean;
    tranformation?: {
        height: number;
        width: number;
        quality: number
    };
    createdAt?: Date;
    updatedAt?: Date;
} 

const videoSchema = new Schema<IVIDEO>({
    title : {type: String, required: true},
    description : {type: String, required: true},
    videoUrl : {type: String, required: true},
    thumbnail : {type: String, required: true},
    tranformation : {
        height: {
            type: Number, 
            default: video_dimesnsions.height
        },
        width: {
            type: Number,
            default: video_dimesnsions.width
        },
        quality: {
            type: Number,
            min: 1,
            max: 100
        }
    }
},{timestamps:true})

const Video = models?.Video || model<IVIDEO>("Video",videoSchema);

export default Video;