import md5File from 'md5-file';
import { glob } from 'glob';

const compareMd5 = (a: any, b: any) => {
  if (a.hash < b.hash) {
    return -1;
  }

  if (a.hash > b.hash) {
    return 1;
  }

  return 0;
}

glob("./recipes/**/*.jpg", function (err, files) {
  const data = files.map(file => {
    return {
      file,
      hash: md5File.sync(file),
    }
  });

  data.sort(compareMd5);

  let prevMd5: string = '';

  data.forEach(d => {
    if (prevMd5 === d.hash) {
      console.log(d.file);
    }

    prevMd5 = d.hash;
  })

  // console.log(data);
});
