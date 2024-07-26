import {Entity, Column, PrimaryGeneratedColumn,CreateDateColumn} from "typeorm";
import { Status } from "../helper/Status-enum";

@Entity()
export class Task{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar", length:45, nullable:false})
    title:string;

    @Column({type:"varchar", length:250, nullable:false})
    description:string;
  
    @Column({type:"enum",enum:Status,default:Status.Pendiente})
    status:Status;
  
    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    createdAt:Date;

}
