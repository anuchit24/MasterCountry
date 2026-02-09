import { ApiProperty } from '@nestjs/swagger';

export class RegisterUserDto {
  @ApiProperty({
    example: 'test@mail.com',
    description: 'User email (must be unique)',
  })
  email!: string;

  @ApiProperty({
    example: '123456',
    description: 'User password',
  })
  password!: string;

  @ApiProperty({
    example: '65f1c2a9e123456789abcd',
    description: 'Country _id from Country collection',
  })
  countryId!: string;
}
