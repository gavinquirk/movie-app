const puppeteer = require('puppeteer');

const imdbPopular = async () => {
  // Open browser and go to imdb popular page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.imdb.com/chart/moviemeter/', {
    waitUntil: 'networkidle0',
  });

  // Scrape data
  let data = await page.evaluate(() => {
    let results = [];
    // Get base table
    let tableElement = document.querySelector('tbody[class="lister-list"]');

    // Get table rows
    let tableRows = tableElement.querySelectorAll('tr');

    tableRows.forEach((row) => {
      // Get data for each element
      let smallPoster = row
        .querySelector('td[class="posterColumn"] > a > img')
        .getAttribute('src');

      let title = row.querySelector('td[class="titleColumn"] > a').innerText;

      let imdbId = row
        .querySelector('td[class="titleColumn"] > a')
        .getAttribute('href')
        .substring(9, 16);

      let year = parseInt(
        row
          .querySelector('td[class="titleColumn"] > span')
          .innerText.substring(1, 5)
      );

      const getRating = () => {
        const ratingElement = row.querySelector(
          'td[class="ratingColumn imdbRating"] > strong'
        );

        if (!ratingElement) return null;

        const rating = parseFloat(ratingElement.innerText);

        return rating;
      };

      let rating = getRating();

      let imdbURL = `https://www.imdb.com/title/tt${imdbId}/`;

      // Place data into result obj
      const result = {
        title,
        year,
        rating,
        smallPoster,
        imdbId,
        imdbURL,
      };

      // Push result into results array
      results.push(result);
    });

    return results;
  });
  await browser.close();
  return data;
};

const imdbTop = async () => {
  // Open browser and go to imdb top page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.imdb.com/chart/top/', {
    waitUntil: 'networkidle0',
  });

  // Scrape data
  let data = await page.evaluate(() => {
    let results = [];
    // Get base table
    let tableElement = document.querySelector('tbody[class="lister-list"]');

    // Get table rows
    let tableRows = tableElement.querySelectorAll('tr');

    tableRows.forEach((row) => {
      // Get data for each element
      let smallPoster = row
        .querySelector('td[class="posterColumn"] > a > img')
        .getAttribute('src');

      let title = row.querySelector('td[class="titleColumn"] > a').innerText;

      let imdbId = row
        .querySelector('td[class="titleColumn"] > a')
        .getAttribute('href')
        .substring(9, 16);

      let year = parseInt(
        row
          .querySelector('td[class="titleColumn"] > span')
          .innerText.substring(1, 5)
      );

      const getRating = () => {
        const ratingElement = row.querySelector(
          'td[class="ratingColumn imdbRating"] > strong'
        );

        if (!ratingElement) return null;

        const rating = parseFloat(ratingElement.innerText);

        return rating;
      };

      let rating = getRating();

      let imdbURL = `https://www.imdb.com/title/tt${imdbId}/`;

      // Place data into result obj
      const result = {
        title,
        year,
        rating,
        smallPoster,
        imdbId,
        imdbURL,
      };

      // Push result into results array
      results.push(result);
    });

    return results;
  });
  await browser.close();
  return data;
};

const imdbSingle = async (imdb_id) => {
  // Open browser and go to imdb page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`https://www.imdb.com/title/tt${imdb_id}`, {
    waitUntil: 'networkidle0',
  });

  // Scrape data
  let data = await page.evaluate(() => {
    let title = document.querySelector('div[class="title_wrapper"] > h1')
      .innerText;

    let year = parseInt(
      document.querySelector('span[id="titleYear"] > a').innerText
    );

    let poster = document
      .querySelector('div[class="poster"] > a > img')
      .getAttribute('src');

    const getRating = () => {
      const ratingElement = document.querySelector(
        'span[itemprop="ratingValue"]'
      );

      if (!ratingElement) return null;

      const rating = parseFloat(ratingElement.innerText);

      return rating;
    };

    let rating = getRating();

    let imdbId = document
      .querySelector('div[class="poster"] > a')
      .getAttribute('href')
      .substring(9, 16);

    let imdbURL = `https://www.imdb.com/title/tt${imdbId}`;

    /* Returning an object filled with the scraped data */
    return {
      title,
      rating,
      year,
      poster,
      imdbId,
      imdbURL,
    };
  });
  await browser.close();
  return data;
};

module.exports = { imdbPopular, imdbTop, imdbSingle };
