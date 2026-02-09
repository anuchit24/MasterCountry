import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { buildSchema } from '@typegoose/typegoose';
import { User } from './user.model';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name, // 👈 "User"
        schema: buildSchema(User), // 👈 ผูก schema
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
