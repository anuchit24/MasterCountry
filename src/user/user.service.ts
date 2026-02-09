import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import type { ReturnModelType } from '@typegoose/typegoose';
import { User } from './user.model';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: ReturnModelType<typeof User>,
  ) {}

  // Login
  async findByEmail(email: string, withPassword = false) {
    const query = this.userModel.findOne({ email });

    // ถ้าต้องการ password (เฉพาะ login)
    if (withPassword) {
      query.select('+password');
    }

    return query;
  }

  // 🔹 Register User
  async register(data: { email: string; password: string; countryId: string }) {
    const exists = await this.userModel.findOne({ email: data.email });
    if (exists) {
      throw new BadRequestException('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    return this.userModel.create({
      email: data.email,
      password: hashedPassword,
      country: data.countryId,
    });
  }

  // 🔹 Get all users
  findAll() {
    return this.userModel.find().populate('country');
  }
}
