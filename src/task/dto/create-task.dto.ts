import { IsString,IsEnum,IsNotEmpty,IsDateString, MaxLength } from "class-validator";
import {Expose} from "class-transformer";
import { Status } from "../helper/Status-enum";

export class CreateTaskDto {
    id:number

    @IsString()
    @IsNotEmpty()
    @Expose()
    @MaxLength(25)
    readonly title:string

    @IsString()
    @IsNotEmpty()
    @Expose()
    @MaxLength(25)
    readonly description:string

    @IsEnum(Status)
    readonly status: Status


    readonly createdAt: Date
    

}
