import { Pipe, PipeTransform } from '@angular/core';
import { APP_CONST } from '../config/consts.config';

@Pipe({
  name: 'defaultImage',
})
export class DefaultImagePipe implements PipeTransform {
  transform(path: string): string {
    return path.trim() ? path : APP_CONST.defaultImagePath;
  }
}
