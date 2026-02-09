import { ApiProperty } from '@nestjs/swagger';

export class CreateCountryDto {
  @ApiProperty({ example: 'TH' })
  code!: string;

  @ApiProperty({ example: 'Thailand' })
  name!: string;
}
